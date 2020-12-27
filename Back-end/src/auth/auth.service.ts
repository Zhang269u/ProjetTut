import {HttpException, Injectable, HttpStatus} from '@nestjs/common';
import { UsersService } from '../../Services/user.service';
import { JwtService } from '@nestjs/jwt';
import {User} from "../../Entities/user.entity";

@Injectable()
export class AuthService{
    private PostgresErrorCode: any;
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly bcrypt = require('bcrypt'),
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

    async login(user : any){
        const payload = { username : user.username, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}