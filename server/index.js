import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { sequelize } from "./config.js";

import { Server as SocketServer } from 'socket.io';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

import connectDB from './config/relations.js'
import "dotenv/config";

import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { validarJWTWebsocket } from "./middlewares/validar-jwt.js"
import { listarUsuarios, mensajePersonal, usuarioConectado, usuarioDesconectado } from './controller/sockets.controllers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer);

// Aumenta el límite de oyentes para evitar la advertencia
import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 15;


sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/User", userRoutes);
app.use("/Auth", authRoutes);
app.use("/Message", messageRoutes);

// Middleware para validar JWT en conexiones WebSocket
io.use((socket, next) => {
  const token = socket.handshake.query['authorization'];
  const [isValid, uid] = validarJWTWebsocket(token);

  if (!isValid) {
    return next(new Error('Authentication error'));
  }

  // Agrega el uid al objeto del socket para su posterior uso
  socket.uid = uid;
  next();
});

// Websocket events
io.on('connection', async (socket) => {
  await usuarioConectado(socket.uid);
  
  // Se une al usuario a una sala de socket.io
  socket.join(socket.uid);
  
  // Agregar el usuario conectado a la lista de usuarios
  io.emit('list-users', await listarUsuarios());

  // Escuchar cuando el cliente envía un mensaje personal
  socket.on('mensaje-personal', async (payload) => {
    const msg = await mensajePersonal(payload);
    io.to(payload.to).emit('mensaje-personal', msg);
  });

  // Escuchar cuando el cliente envía un nuevo mensaje
  socket.on('new-message', (data) => {
    io.emit('new-message', data);
  });

  // Manejar la desconexión del usuario
  socket.on('disconnect', async () => {
    const user = await usuarioDesconectado(socket.uid);
    io.emit('list-users', await listarUsuarios());
    console.log('Usuario desconectado:', user.username);
  });
});

httpServer.listen(3000, () => {
  connectDB();
  console.log('Server escuchando en puerto 3000');
});
