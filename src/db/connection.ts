import { Sequelize } from "sequelize";
import config from "../config/config";


const db = new Sequelize(
    config.db_name,
    config.user || "",
    config.password || "", {
    host: config.host,
    port: 4500,
    dialect: "mysql",
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default db
