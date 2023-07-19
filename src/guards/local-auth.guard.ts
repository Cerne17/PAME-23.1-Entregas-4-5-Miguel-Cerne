import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from 'src/auth/dto/login.dto';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info, context, status) {
    const request = context.switchToHttp().getRequest();
    const { name, password }: LoginDto = request.body;
    if (err || !user) {
      if (!name) {
        throw new HttpException({ message: 'no name' }, HttpStatus.BAD_REQUEST);
      } else if (!password) {
        throw new HttpException(
          { message: 'no password' },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw err || new UnauthorizedException();
      }
    }
    return user;
  }
}
