import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
    res.render("auth/login", {
        page: "Iniciar Sesion"
    });
};


const registro = async (req: Request, res: Response) => {
    res.render("auth/registro", {
        page: "Crear Cuenta"
    });
}
const forgetPassword = async (req: Request, res: Response) => {
    res.render("auth/forget-password", {
        page: "Recuperar password"
    });
}

export const usuariosController = {
    login,
    registro,
    forgetPassword
}