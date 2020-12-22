import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
//import { CreateUserDto } from './dto/create-user.dto';
import { Media } from './media.entity';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
    constructor(private readonly thematicService: MediaService) {}

    /*@Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }*/

    @Get()
    findAll(): Promise<Media[]> {
        return this.thematicService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Media> {
        return this.thematicService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.thematicService.remove(id);
    }
}