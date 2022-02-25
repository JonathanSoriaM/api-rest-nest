import { Document } from "mongoose";


export interface Empleado extends Document{
    readonly name    : string;
    readonly correo  : string;
    readonly edad    : number;
    readonly puesto  : string;
    readonly ingreso : Date;
}