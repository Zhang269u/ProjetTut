import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slide } from './slide.entity';

@Injectable()
export class SlideService {
    constructor(
        @InjectRepository(Slide)
        private slideRepository: Repository<Slide>,
    ) {}

    findAll(): Promise<Slide[]> {
        return this.slideRepository.find();
    }

    findOne(id: string): Promise<Slide> {
        return this.slideRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.slideRepository.delete(id);
    }
}
