import {
  Body,
  Controller,
  HttpException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetCurrentUser, GetCurrentUserId, Public } from './decorators';
import { AuthDto } from './dto/';
import { ATGuard, RTGuard } from './guards';
import { Tokens } from './interfaces';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UsersService,
  ) {}

  @Public()
  @Post('local/signUp')
  signUpLocal(@Body() authDto: AuthDto): Promise<Tokens | HttpException> {
    return this.authService.signUpLocal(authDto);
  }

  @Public()
  @Post('local/signIn')
  async signInLocal(@Body() authDto: AuthDto): Promise<Tokens | HttpException> {
    const result = await this.authService.signInLocal(authDto);
    if (result instanceof HttpException) {
      throw result;
    }
    return result;
  }

  @UseGuards(ATGuard)
  @Post('logout')
  logout(@GetCurrentUserId() userId: string) {
    return this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RTGuard)
  @Post('refresh')
  refreshTokens(
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUserId() userId: string,
  ) {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
