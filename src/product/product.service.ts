import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import {CreateProductDTO} from './dto/product.tdo'

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product')private readonly producModel : Model<Product> ){}


   async getProducts(): Promise<Product[]>{
       const products = await this.producModel.find()
       return products
    }

    async getProduct(productID :string): Promise<Product>{
        const product = await this.producModel.findById(productID);
        return product;
    }

    async createProduct(createProductDTO : CreateProductDTO):Promise<Product>{
        const newProduct = new this.producModel(createProductDTO);
        return await newProduct.save();
      
    }

    async deleteProduct(productID : string ): Promise<Product>{
        const deleteProduct = await this.producModel.findByIdAndDelete(productID)
        return deleteProduct;
    }

    async updateProduct(productID : string , createProdutTDO : CreateProductDTO): Promise<Product>{
        const updatedProdut = await this.producModel.findByIdAndUpdate(productID, createProdutTDO,{new:true });
        return updatedProdut;

    }
}
