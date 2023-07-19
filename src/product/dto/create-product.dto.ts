import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string; // Bolo ou sorvete
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
  @IsDate()
  @IsNotEmpty()
  expireDate: Date;
  @IsDate()
  @IsNotEmpty()
  productionDate: Date;
}
