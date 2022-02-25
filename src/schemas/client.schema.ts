import { Schema } from "mongoose";


export const ClientSchema = new Schema({
    name : String,
    correo: String ,
    telefono : String,
    direccion : String,
    fechaAlta: {
        type: Date,
        default: Date.now
    }

});