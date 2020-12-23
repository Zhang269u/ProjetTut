import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlideService } from '../Services/slide.service';
import { SlideController } from '../Controller/slide.controller';
import { Slide } from '../Entities/slide.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Slide])],
    providers: [SlideService],
    controllers: [SlideController],
})
export class ThematicModule {}
