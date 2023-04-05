import express from "express";
import cors from "cors";
import usuariosRouter from "./routes/usuarios.routes";
import db from "./db/connection";

const PORT: number | string = 4500;

// app
const app = express();


// conexion
const getconnection = async () => {
    try {
        await db.authenticate();
        db.sync()
        console.log("conectado a la db")
    } catch (error) {
        console.log("====> errorrrr", error)
    }
}
getconnection()


// MIDDLEWARES

/**habilitar lectura de form pug*/
app.use(express.urlencoded({ extended: true }));
/**cors */
app.use(cors())
/*pugs*/
app.set('view engine', 'pug');
app.set('views', './src/views/');
/**public statics */
app.use(express.static('public'));


// routes
/**autenticación usuarios */
app.use('/auth', usuariosRouter)



app.listen(PORT, () => console.log("run server", PORT));