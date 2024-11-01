import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { JwtAuthService } from 'src/jwt/jwt.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'superSecret', 
      signOptions: { expiresIn: '120m' },
    }),
  ],
  providers: [AuthService, UsersService, JwtStrategy, JwtAuthService],
  controllers: [AuthController]
})
export class AuthModule { }
