import { Schema } from "mongoose";

export const EmpleadoSchema = new Schema ({
    name   : String,
    correo : String,
    edad   : Number,
    puesto : String,
    ingreso: {
        type:Date,
        default : Date.now
    }



})