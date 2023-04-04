import { Router } from "express";
import { usuariosController } from "../controllers/usuarios.controllers";

// controllers
const {
    login,
    registro,
    forgetPassword
} = usuariosController;


// router
const router = Router();

router.get('/login', login);
router.get('/registro', registro);
router.get('/recuperar-password', forgetPassword);



export default router