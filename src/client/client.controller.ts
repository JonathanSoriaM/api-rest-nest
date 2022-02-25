import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/client.dt';

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService){}
    
@Post('/create')
    async createPost(@Res() res, @Body() createClientDTO : CreateClientDTO){
        const client = await this.clientService.createClient(createClientDTO);
        return res.status(HttpStatus.OK).json({message : 'Success'})
    }    
@Get()
    async getClients(@Res() res){
        const clients = await this.clientService.getClients();
        return res.status(HttpStatus.OK).json(clients)
    }    
@Get('/:clientID')
    async getClient(@Res() res,@Param('clientID') clientID ){
        const client = await this.clientService.getClient(clientID)
            if(!client) throw new NotFoundException('This client not exist')
        return res.status(HttpStatus.OK).json(client)    


    }  
@Delete('/:clienteID')
    async deleteClient(@Res() res,@Param('clientID') clientID){
        const delClient = await this.clientService.deleteClient(clientID)
            if(!delClient) throw new NotFoundException('This client not exist')
        return res.status(HttpStatus.OK).json({message:'Deleted'})    
    }    

@Put('/:clientID')
    async updateClient(@Res() res, @Body() createClientDTO : CreateClientDTO,@Param ('clientID') clientID){
        const upCLient = await this.clientService.updateClient(clientID,createClientDTO)
            if(!upCLient) throw new NotFoundException('This client not exist')
        return res.status(HttpStatus.OK).json({
            message : ' Update',
            upCLient
        })    
    }
}
