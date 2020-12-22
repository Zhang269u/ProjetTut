import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThematicService } from './thematic.service';
import { ThematicController } from './thematic.controller';
import { Thematic } from './thematic.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Thematic])],
    providers: [ThematicService],
    controllers: [ThematicController],
})
export class ThematicModule {}
