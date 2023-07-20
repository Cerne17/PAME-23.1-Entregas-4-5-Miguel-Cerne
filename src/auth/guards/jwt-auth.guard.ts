import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Adicionar a minha própria lógica de autenticação aqui
    // ex: chamar super.login(request) para estabelecer uma conexão

    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );

    if (isPublic) return true;

    return super.canActivate(context);
  }

  handleRequest(err, user) {
    // É possível indicar erros via informações ou argumentos de erro
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
