import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferService } from '../Services/offer.service';
import { OfferController } from '../Controller/offer.controller';
import { Offer } from '../Entities/offer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Offer])],
    providers: [OfferService],
    controllers: [OfferController],
})
export class ThematicModule {}
