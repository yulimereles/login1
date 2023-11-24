import { UserModel } from '../models/usuario.models.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { generarJWT } from '../helpers/generar_jwt.js';

export const registro = async (req, res) => {
    try {
        // Validación de campos obligatorios
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                msg: 'Faltan campos obligatorios: username y password',
            });
        }

        // Verificación de existencia de usuario
        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                msg: 'El nombre de usuario ya está en uso',
            });
        }

        // Creación y guardado del nuevo usuario
        req.body.password = bcrypt.hashSync(password, 10);
        const newUser = await UserModel.create(req.body);

        // Respuesta exitosa
        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Validación de campos obligatorios
        if (!username || !password) {
            return res.status(400).json({
                msg: 'Faltan campos obligatorios: username y password',
            });
        }

        const user = await UserModel.findOne({ username });

        // Verificación de existencia de usuario
        if (!user) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - username',
            });
        }

        // Verificación de usuario activo
        if (!user.active) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - active: false',
            });
        }

        // Verificación de contraseña
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
            });
        }

        // Generación de token JWT
        const token = await generarJWT(user._id);

        // Respuesta exitosa
        return res.json({
            user,
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
};
