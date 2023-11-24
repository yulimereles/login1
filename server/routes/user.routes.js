import { Router } from "express";
import { CtrlGetUserData } from "../controller/user.controllers.js";
import { CtrlPostRegister } from "../controller/user.controllers.js";
import { CtrlPostLogin } from "../controller/user.controllers.js";

const router = Router()

router.get('/userData', CtrlGetUserData);

router.post('/register', CtrlPostRegister )

router.post('/login', CtrlPostLogin );


export default router;