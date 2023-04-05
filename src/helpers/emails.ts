import nodemailer from "nodemailer";
import config from "../config/config";
// import { Request } from "express";
import { IUsuarios } from "../ts/models/usuarios.models";


const emailRegisterConfirmation = async (dataUser: IUsuarios) => {

    const transport = nodemailer.createTransport({
        host: config.mail_host,
        port: Number(config.mail_port),
        auth: {
            user: config.mail_user,
            pass: config.mail_passw
        }
    });

    await transport.sendMail({
        from: "bienes raices",
        to: dataUser?.email,
        subject: "confirma tu cuenta",
        html: `<p>Hola ${dataUser?.nombre}, solo falta confirmar tu cuenta de bienes raices</p>
        <p>presione en el siguiente enlace para <a href="http://localhost:4500/auth/${dataUser?.token || ''}">confirmar</a></p>
        <p>Si no creaste una cuenta en bienes raices.com puedes ignorar este mensaje</p>
        `
    })
}

export {
    emailRegisterConfirmation
}