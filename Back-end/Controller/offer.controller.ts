import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
//import { CreateUserDto } from './dto/create-user.dto';
import { Offer } from '../Entities/offer.entity';
import { OfferService } from '../Services/offer.service';

@Controller('offer')
export class OfferController {
    constructor(private readonly thematicService: OfferService) {}

    /*@Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }*/

    @Get()
    findAll(): Promise<Offer[]> {
        return this.thematicService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Offer> {
        return this.thematicService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.thematicService.remove(id);
    }
}