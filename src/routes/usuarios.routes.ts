import { Router } from "express";
import { usuariosController } from "../controllers/usuarios.controllers";

// controllers
const {
    login,
    registro,
    formularioRegistro,
    resetPassword,
    confirmationToken
} = usuariosController;


// router
const router = Router();


/**GET´s */
router.get('/login', login);
router.get('/registro', formularioRegistro);
router.get('/recuperar-password', resetPassword);
router.get('/:token', confirmationToken)
/**POST´s */
router.post('/registro', registro);



export default router