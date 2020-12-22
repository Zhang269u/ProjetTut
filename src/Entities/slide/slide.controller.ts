import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
//import { CreateUserDto } from './dto/create-user.dto';
import { Slide } from './slide.entity';
import { SlideService } from './slide.service';

@Controller('slides')
export class SlideController {
    constructor(private readonly slideService: SlideService) {}

    /*@Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }*/

    @Get()
    findAll(): Promise<Slide[]> {
        return this.slideService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Slide> {
        return this.slideService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.slideService.remove(id);
    }
}