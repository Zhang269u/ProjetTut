import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../Modules/user.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './Strategies/local.strategy';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController]
})
export class AuthenticationModule {}