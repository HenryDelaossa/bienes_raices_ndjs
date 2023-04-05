import { config } from "dotenv";
config();

export default {
    host: process.env.DB_HOST_NAME || 'localhost',
    db_name: process.env.DB_NAME || 'bienes_raices_node',
    user: process.env.DB_USER_NAME || "root",
    password: process.env.PASSWORD || '',
    port: (process.env.DB_PORT as unknown as number) || 3306,
    /**mailer */
    mail_host: process.env.EMAIL_HOST,
    mail_port: process.env.EMAIL_PORT,
    mail_user: process.env.EMAIL_USER,
    mail_passw: process.env.EMAIL_PASS
}