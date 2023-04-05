import { Request, Response } from "express";
import { check, validationResult } from "express-validator"
import Usuario from "../models/Usuario";
import { generateId } from "../helpers/tokens";
import { emailRegisterConfirmation } from "../helpers/emails";

const login = async (req: Request, res: Response) => {
    res.render("auth/login", {
        page: "Iniciar Sesion"
    });
};


const formularioRegistro = async (req: Request, res: Response) => {
    res.render("auth/registro", {
        page: "Crear Cuenta"
    });
}

// permite registrar unn usuario
const registro = async (req: Request, res: Response) => {

    const { nombre, email, password } = req.body;

    // validations
    await check('nombre').notEmpty().withMessage("El nombre no puede estar vacio").run(req);
    await check('email').isEmail().withMessage("El email no parece ser valido").run(req);
    await check('password').isLength({ min: 7 }).withMessage("la contraseña debe ser al menos de 7 caracteres").run(req);
    await check('repite_password').equals(password).withMessage("las contraseñas no coinciden").run(req);
    const result = validationResult(req);

    // validacion campos vacios
    if (!result.isEmpty()) {
        return res.render("auth/registro", {
            page: "Crear Cuenta",
            errors: result.array(),
            data: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        });
    }

    // validar si usuario/email existe en la db
    const usuarioExist = await Usuario.findOne({ where: { email } });
    console.log('usuarioeciste=====>>>>', usuarioExist)
    if (usuarioExist) {
        return res.render("auth/registro", {
            page: "Crear Cuenta",
            errors: [{ msg: `Ya existe un usuario registrado con el email ${email}` }],
            data: {
                nombre: nombre,
                email: email
            }
        });
    }

    // crear registro de usuario en la db
    const user = await Usuario?.create({ ...req.body, token: generateId() });

    // enviar email de confirmacion
    user && emailRegisterConfirmation(user);

    // show confirmation msg
    res.render('templates/mensage_registro', {
        page: "Cuenta creada correctamente",
        mensaje: `Se ha enviado un email de validacion a ${email}`
    })

}

// confirmacion token registro
const confirmationToken = async (req: Request, res: Response) => {
    console.log(req.params)
}

const resetPassword = async (req: Request, res: Response) => {
    res.render("auth/forget-password", {
        page: "Recuperar password"
    });
}

export const usuariosController = {
    login,
    formularioRegistro,
    confirmationToken,
    resetPassword,
    registro
}