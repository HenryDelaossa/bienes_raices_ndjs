import { config } from "dotenv";
config();

export default {
    host: process.env.HOST_NAME || 'localhost',
    db_name: process.env.DB_NAME || 'bienes_raices_node',
    user: process.env.USER_NAME || 'root',
    password: process.env.PASSWORD || '',
    port: process.env.PORT || 4500
}