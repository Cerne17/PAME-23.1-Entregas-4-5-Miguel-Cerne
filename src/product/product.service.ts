import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create({
      ...createProductDto,
      createdAt: new Date(),
      changedAt: new Date(),
    });
    this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.productRepository.update(
      { id },
      { ...updateProductDto, changedAt: new Date() },
    );
  }

  remove(id: number) {
    this.productRepository.delete({ id });
  }
}
