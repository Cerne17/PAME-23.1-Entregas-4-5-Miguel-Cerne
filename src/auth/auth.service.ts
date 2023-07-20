import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  login(user: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<any> {
    const { name, password } = loginDto;
    const user = await this.userService.findOneByName(name); // Codar uma nova função para encontrar o user por nome
    if (!user) {
      throw new NotFoundException('User with name ' + name + ' not found');
    }

    const password_is_equal = await bcrypt.compare(
      password,
      user.hashed_password,
    );

    if (password_is_equal) {
      const { hashed_password, ...result } = user;
      return result;
    }
    return null;
  }
}
