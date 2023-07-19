import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(id: number, pass: string): Promise<any> {
    const user = await this.userService.findOne(id);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // Gerar uma JWT e retornar aqui no lugar do objeto de usuário
    return result;
  }
}
