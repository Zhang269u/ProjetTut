import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
//import { CreateUserDto } from './dto/create-user.dto';
import { Thematic } from './thematic.entity';
import { ThematicService } from './thematic.service';

@Controller('themes')
export class ThematicController {
    constructor(private readonly thematicService: ThematicService) {}

    /*@Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }*/

    @Get()
    findAll(): Promise<Thematic[]> {
        return this.thematicService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Thematic> {
        return this.thematicService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.thematicService.remove(id);
    }
}