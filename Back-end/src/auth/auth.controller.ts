import { Body, Req, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
//import RegisterDto from './dto/register.dto';
import RequestWithUser from '../../Interfaces/requestWithUser.interface';
import { LocalAuthGuard } from '../../Guards/auth.guard';
import {User} from "../../Entities/user.entity";

@Controller('authentication')
export class AuthController {
    constructor(
        private readonly authenticationService: AuthService
    ) {}

    @Post('register')
    async register(@Body() registrationData: User) {
        return this.authenticationService.register(registrationData);
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async logIn(@Req() request: RequestWithUser) {
        const user = request.user;
        user.password = undefined;
        return user;
    }
}