import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../entity/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  // Get all products
  async getAllProducts(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  // Get a product by ID
  async getProductById(productId: number): Promise<Products> {
    const product = await this.productsRepository.findOne({
      where: { product_id: productId },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  // Create a new product
  async createProduct(createProductDto: CreateProductDto): Promise<Products> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  // Update a product
  async updateProduct(
    productId: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    const product = await this.getProductById(productId);
    Object.assign(product, updateProductDto);
    return this.productsRepository.save(product);
  }

  // Delete a product
  async deleteProduct(productId: number): Promise<void> {
    const product = await this.getProductById(productId);
    await this.productsRepository.remove(product);
  }

  // Calculate product value
  async calculateProductValue(productId: number): Promise<number> {
    const product = await this.getProductById(productId);
    return product.sale_price;
  }
}
