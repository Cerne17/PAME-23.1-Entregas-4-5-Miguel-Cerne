import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}
  create(createIngredientDto: CreateIngredientDto) {
    const newIngredient = this.ingredientRepository.create({
      ...createIngredientDto,
      createdAt: new Date(),
      changedAt: new Date(),
    });
    this.ingredientRepository.save(newIngredient);
  }

  findAll() {
    return this.ingredientRepository.find();
  }

  findOne(id: number) {
    return this.ingredientRepository.findOneBy({ id });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    this.ingredientRepository.update(
      { id },
      { ...updateIngredientDto, changedAt: new Date() },
    );
  }

  remove(id: number) {
    this.ingredientRepository.delete({ id });
  }
}
