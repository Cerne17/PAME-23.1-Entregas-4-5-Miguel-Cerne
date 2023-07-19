import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  @Min(8)
  @Max(30)
  password: string;
}
