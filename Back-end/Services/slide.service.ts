import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slide } from '../Entities/slide.entity';
import {Offer} from "../Entities/offer.entity";

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

    async createOffer(slides : Slide){
        const newSlide = await this.slideRepository.create(slides);
        await this.slideRepository.save(newSlide);
        return newSlide;
    }
}
