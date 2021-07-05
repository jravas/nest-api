import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { AuthGuard } from '@nestjs/passport'

@Controller('google')
export class AppController {
  constructor (private readonly appService: AppService) {}

  // test
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth (@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect (@Req() req) {
    return this.appService.googleLogin(req)
  }

  // @Get('logout')
  // @UseGuards(AuthGuard('google'))
  // async logOut (@Req() req) {
  //   req.logout()
  // }
}
