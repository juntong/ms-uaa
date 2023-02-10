import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from '@/app.service';
import { AuthService } from '@/auth/auth.service';
import { LocalAuthGuard } from '@/auth/local.guard';
import { Request as RawRequest } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async authLogin(
    @Body() body: any,
    @Request() request: RawRequest & { [key: string]: any },
  ): Promise<any> {
    return await this.authService.login(request.user);
  }
}
