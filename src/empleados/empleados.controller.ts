import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ignoreElements } from 'rxjs';
import { CreateEmpleadoDTO } from './empleados.dto';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
    constructor(private empleadosService : EmpleadosService){}

    @Post('/create')
      async createPost(@Res() res, @Body() createEmpleadoDTO : CreateEmpleadoDTO){
          const empleado = await this.empleadosService.createEmpleado(createEmpleadoDTO)
          return res.status(HttpStatus.OK).json({
              message: 'Empleado Created',
              empleado
          })
      }

    @Get()
     async getEmpleados(@Res() res){
      const getEmpleados = await this.empleadosService.getEmpleados()
      return res.status(HttpStatus.OK).json({
          message:' Empleados',
          getEmpleados
      })
     }

    @Get('/empleadoID')
     async getEmpleado(@Res() res, @Param('empleadoID') empleadoID){
         const empleado = await this.empleadosService.getEmpleado(empleadoID)
         if(!empleado) throw new NotFoundException('Empleado Does not Exist')
         return res.status(HttpStatus.OK).json({
             messaje : 'Empleado Information',
             empleado
         })
         
     }

    @Delete('/delete')
      async deleteEmpleado(@Res() res, @Query('empleadoID') empleadoID){
          const delEmpleado = await this.empleadosService.deleteEmpleado(empleadoID)
          if(!delEmpleado) throw new NotFoundException('Empleado Does not Exist')
          return res.status(HttpStatus.OK).json({
              messaje: 'Empleado Deleted Successfull',
              delEmpleado
          })
      } 

    @Put('/update')
     async updateEmpleado(@Res() res, @Body() createEmpleadoDTO: CreateEmpleadoDTO,@Query('empleadoID') empleadoID){
         const upEmpleado = await this.empleadosService.updateEmpleado(empleadoID, createEmpleadoDTO)
         if(!upEmpleado) throw new NotFoundException('Empleado Does not Exist')
         return res.status(HttpStatus.OK).json({
             messaje: 'Empleado Updated',
             upEmpleado
         })
     }  

}
