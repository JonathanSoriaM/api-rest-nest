import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema} from '../schemas/client.schema'
import { ClientController } from './client.controller';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name : 'Client',schema: ClientSchema}
    ])
  ],
  controllers:[ClientController],
  providers: [ClientService]
})
export class ClientModule {}
