import { Controller, Get, Post, Res, HttpStatus, Body, Param, HttpCode, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import {CreateProductDTO} from './dto/product.tdo'
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService : ProductService){}

    @Post('/create')
        async createPost(@Res() res,@Body() createProductDTO : CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
         return   res.status(HttpStatus.OK).json( {
                message: "Product Created",
                product : product
            })
        }
    @Get()
       async getProducts(@Res() res) {
           const products = await this.productService.getProducts()
          return  res.status(HttpStatus.OK).json({
                
                products 
            })
        }

    @Get('/:productID')
     async getProduct(@Res() res, @Param('productID') producID ){

      const product = await  this.productService.getProduct(producID)
        if(!product) throw new NotFoundException('Product Does not exist')
     return res.status(HttpStatus.OK).json(product)

       
    }

    @Delete('/delete')
        async deletedProduct(@Res() res, @Query('productID') productID){
          
         const delProduct = await this.productService.deleteProduct(productID);
         if(!delProduct) throw new NotFoundException('Product Does not exist')   
         return res.status(HttpStatus.OK).json({
             message : 'Product Deleted Successfull',
             delProduct})
        }
    @Put('/update')
       async updateProduct(@Res() res, @Body() createProductDTO : CreateProductDTO, @Query('productID') prodictID){
           const updatetingProduct = await this.productService.updateProduct(prodictID,createProductDTO)
           if(!updatetingProduct) throw new NotFoundException('Product Does not exist')  
           return res.status(HttpStatus.OK).json(updatetingProduct)
        }
            
}
