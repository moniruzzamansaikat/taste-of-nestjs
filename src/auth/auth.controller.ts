import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/users/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { ThrottlerGuard } from '@nestjs/throttler';

//   {
//     "username": "testuser",
//     "email": "testuser@example.com",
//     "password": "securePassword123"
// }

interface LoginResponse {
  accessToken: string;
}

@Controller('auth')
@UseGuards(ThrottlerGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponse> {
    return this.authService.login(loginUserDto);
  }
}
