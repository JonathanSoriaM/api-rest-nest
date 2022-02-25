import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmpleadoDTO } from './empleados.dto';
import { Empleado } from './interfaces/empleado.interface';

@Injectable()
export class EmpleadosService {
    constructor(@InjectModel('Empleado') private readonly empleadoModel : Model<Empleado> ){}

    async getEmpleados(): Promise<Empleado[]>{
      const empleados = await this.empleadoModel.find()
      return empleados
    }

    async getEmpleado(empleadoID : string): Promise<Empleado>{
      const empleado = await this.empleadoModel.findById(empleadoID);
      return empleado;
    } 

    async createEmpleado(createEmpleadoDTO : CreateEmpleadoDTO): Promise<Empleado>{
        const newEmpleado = new this.empleadoModel(createEmpleadoDTO);
        return await newEmpleado.save();
    }

    async deleteEmpleado (empleadoID : string): Promise<Empleado>{
        const deleteEmpleado = await this.empleadoModel.findByIdAndDelete(empleadoID);
        return deleteEmpleado;
    }
    async updateEmpleado (productID : string, createEmpleadoDTO : CreateEmpleadoDTO): Promise<Empleado>{
        const upEmpleado = await this.empleadoModel.findByIdAndUpdate(productID,createEmpleadoDTO)
        return upEmpleado;
    }
}
