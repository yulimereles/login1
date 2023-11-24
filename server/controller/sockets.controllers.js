import { MessageModel } from "../models/message.js";
import { UserModel } from "../models/usuario.models.js";

export const usuarioConectado = async (uid) => {
    const user = await UserModel.findByIdAndUpdate(uid, { online: true });
    return user;
}

export const usuarioDesconectado = async (uid) => {
    const user = await UserModel.findByIdAndUpdate(uid, { online: false });
    return user;
}

export const listarUsuarios = async () => {
    const users = await UserModel.find().sort('-online');
    return users;
}

export const mensajePersonal = async (payload) => {
    const { from, to, message } = payload;

    const newMessage = new MessageModel({ from, to, text: message, read: false });
    const msg = await newMessage.save();

    return msg;
}
