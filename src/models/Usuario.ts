import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../db/connection";

const Usuario = db.define("usuarios", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    comfirmado: DataTypes.BOOLEAN
}, {
    hooks: {
        beforeCreate: async (usuario: any) => {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(usuario.password, salt);
            usuario.password = hash;
        }
    }
}

)


export default Usuario