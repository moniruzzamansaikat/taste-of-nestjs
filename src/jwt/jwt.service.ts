import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService, private configService: ConfigService) {}

  generateToken(user: User) {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload, {
      secret: this.getSecret()
    });
  }

  getSecret() {
    return this.configService.get<string>('JWT_SECRET_KEY');
  }
}
