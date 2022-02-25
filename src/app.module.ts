import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
  imports: [
    ProductModule,
    ClientModule,
    EmpleadosModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestExample',{
    //MongooseModule.forRoot('mongodb+srv://JonathanMSoria:Rsayviento5234@cluster0-dlged.mongodb.net/apiRest?retryWrites=true&w=majority',{
      useNewUrlParser:true
    }),
   
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
