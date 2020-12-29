import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../Modules/user.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './Strategies/local.strategy';
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./Strategies/jwt.strategy";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [UsersModule,
                PassportModule,
                JwtStrategy,
                ConfigModule,
                JwtModule.registerAsync({
                    imports:[ConfigModule],
                    inject:[ConfigService],
                    useFactory: async(configService: ConfigService) => ({
                        secret: configService.get('JWT_SECRET'),
                        signOptions: {
                            expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
                        },
                    }),
                })
    ],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController]
})
export class AuthenticationModule {}