import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './interfaces/client.interface'
import { CreateClientDTO } from './dto/client.dt';

@Injectable()
export class ClientService {

    constructor(@InjectModel('Client') private readonly clientModel:Model<Client>){}

    async getClients(): Promise<Client[]>{
        const clients = await this.clientModel.find();
        return clients
    }
    async getClient(clientID : string): Promise<Client>{
        const client = await this.clientModel.findById(clientID);
        return client
    }

    async createClient(createClientDTO : CreateClientDTO): Promise<Client>{
        const newClient = new this.clientModel(createClientDTO);
        return await newClient.save();
    }

    async deleteClient(clientDI : string): Promise<Client>{
        const deleteClient = await this.clientModel.findByIdAndDelete(clientDI);
        return deleteClient;
    }

    async updateClient(clientID : string, createClienteDTO : CreateClientDTO):Promise<Client>{
        const upClient = await this.clientModel.findByIdAndUpdate(clientID, createClienteDTO);
        return upClient;
    }
}
