import { Router } from "express";
import { obtenerMensajes } from "../controller/message.controllers.js";

const router = Router();

router.get('/', obtenerMensajes)


export default router;