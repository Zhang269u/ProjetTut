import {
    HttpException,
    Injectable,
    HttpStatus,
    HttpCode,
    UseGuards,
    Post,
    Req,
    Res,
    Controller,
    Get
} from '@nestjs/common';
import { UsersService } from '../../Services/user.service';
import { JwtService } from '@nestjs/jwt';
import {User} from "../../Entities/user.entity";
import {LocalAuthGuard} from "../../Guards/auth.guard";
import RequestWithUser from "../../Interfaces/requestWithUser.interface";
import { Response } from 'express';
import {ConfigService} from "@nestjs/config";
import JwtAuthenticationGuard from "../../Guards/jwtAuth.guard";
@Controller(`auth`)

@Injectable()
export class AuthService{
    private PostgresErrorCode: any;
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly bcrypt = require('bcrypt'),
        private readonly configService: ConfigService
    ) {}

    public async register(registrationData: User) {
        const hashedPassword = await this.bcrypt.hash(registrationData.password, 10);
        try {
            const createdUser = await this.usersService.createUser({
                ...registrationData,
                password: hashedPassword
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            if (error?.code === this.PostgresErrorCode.UniqueViolation) {
                throw new HttpException("L'utilisateur avec cette adresse mail existe déjà.", HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Erruer', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public async getAuthenticatedUser(email: string, plainTextPassword: string) {
        try {
            const user = await this.usersService.getByMail(email);
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException("Mauvais mot de passe ou l'adresse mail", HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const isPasswordMatching = await this.bcrypt.compare(
            plainTextPassword,
            hashedPassword
        );
        if (!isPasswordMatching) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    async validateUser(username: string, pass: string): Promise<any>{
        const user = await this.usersService.findOne(username);
        if(user && user.password === pass){
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() request: RequestWithUser, @Res() res: Response) {
        const {user} = request;
        const cookie = this.getCookieWithJwtToken(user.id);
        res.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        return res.send(user);
    }

    public getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post('logout')
    async logout(@Req() request: RequestWithUser, @Res() response: Response) {
        response.setHeader('Set-Cookie', this.getCookieForLogOut());
        return response.sendStatus(200);
    }

    public getCookieWithJwtToken(userId: number) {
            const payload: TokenPayload = { userId };
            const token = this.jwtService.sign(payload);
            return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
        }

    @UseGuards(JwtAuthenticationGuard)
    @Get()
    authenticate(@Req() request: RequestWithUser) {
        const user = request.user;
        user.password = undefined;
        return user;
    }
}