import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thematic } from './thematic.entity';

@Injectable()
export class ThematicService {
    constructor(
        @InjectRepository(Thematic)
        private thematicRepository: Repository<Thematic>,
    ) {}

    findAll(): Promise<Thematic[]> {
        return this.thematicRepository.find();
    }

    findOne(id: string): Promise<Thematic> {
        return this.thematicRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.thematicRepository.delete(id);
    }
}
