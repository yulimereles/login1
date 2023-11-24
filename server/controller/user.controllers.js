import { UserModel } from "../models/usuario.models.js";
import jwt from "jsonwebtoken";
import { generarJWT } from "../helpers/generar_jwt.js";
import environments from "../config/environments.js";

export const CtrlCreateUser = async (req, res) => {
  try {
    const users = await UserModel.create({
        
    })
  } catch (error) {}
};

export const CtrlGetUserData = (req, res) => {
    const token = req.headers.authorization; // Recupera el token de autorización de las cabeceras
  
    // Verifica y decodifica el token JWT
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Token inválido' });
      } else {
        // El token es válido, y 'decoded' contiene los datos del usuario
        const userData = {
          username: decoded.id, // Aquí puedes ajustar la propiedad que necesites
          // Otras propiedades del usuario, si es necesario
        };
        res.json(userData); // Devuelve los datos del usuario en formato JSON
      }
    })
};

export const CtrlPostRegister = async (req, res) =>{
    const sentEmail = req.body.Email
    const setUsername= req.body.Username
    const sentPassword = req.body.Password
    try {
        const newUser = await UserModel.create({
            email: sentEmail,
            username: setUsername,
            password: sentPassword
        })

        if (!newUser) {
            res.status(500).send({
                message: "Error al crear el Usuario"
            })
        }

        const token = await generarJWT(newUser.id)
        

            
        res.status(201).send({ message: "Usuario Creado", token })
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor!");
    } 
    
    };

    export const  CtrlPostLogin = async (req, res) => {
        const setLoginUsername = req.body.LoginUsername;
        const setLoginPassword = req.body.LoginPassword;

        const token = req.header("Authorization");
        try {
          const { id } = jwt.verify(token, environments.SECRET_KEY);
          const loginUser = await UserModel.findByPk(id)

        if (!loginUser) {
            res.status(404).send({
                message: "No se ha encontrado el usuario"
            })
        } 
        res.status(200).send({ message: "Usuario logeado con exito", loginUser })
        } catch (error) {
          console.log(error)
          res.status(500).send({ message: "Error del servidor"})
        }
    }