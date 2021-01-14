import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from '../Entities/offer.entity';
import {User} from "../Entities/user.entity";

@Injectable()
export class OfferService {
    constructor(
        @InjectRepository(Offer)
        private offerRepository: Repository<Offer>,
    ) {}

    findAll(): Promise<Offer[]> {
        return this.offerRepository.find();
    }

    findOne(id: string): Promise<Offer> {
        return this.offerRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.offerRepository.delete(id);
    }

    async createOffer(offer : Offer){
        const newOffer = await this.offerRepository.create(offer);
        await this.offerRepository.save(newOffer);
        return newOffer;
    }
}
