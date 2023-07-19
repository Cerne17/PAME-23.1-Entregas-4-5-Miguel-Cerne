import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  status: string;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  @IsNotEmpty()
  @IsDate()
  expireDate: Date;
}
