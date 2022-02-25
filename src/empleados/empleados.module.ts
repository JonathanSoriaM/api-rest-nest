import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadoSchema } from 'src/schemas/empleados';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Empleado' , schema:EmpleadoSchema }
    ])
  ],
  controllers: [EmpleadosController],
  providers: [EmpleadosService]
})
export class EmpleadosModule {}
