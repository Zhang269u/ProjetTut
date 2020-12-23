import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThematicService } from '../Services/thematic.service';
import { ThematicController } from '../Controller/thematic.controller';
import { Thematic } from '../Entities/thematic.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Thematic])],
    providers: [ThematicService],
    controllers: [ThematicController],
})
export class ThematicModule {}
