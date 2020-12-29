import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaService } from '../Services/media.service';
import { MediaController } from '../Controller/media.controller';
import { Media } from '../Entities/media.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Media])],
    providers: [MediaService],
    controllers: [MediaController],
})
export class MediaModule {}
