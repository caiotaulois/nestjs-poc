import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './interfaces';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get(':id')
    get(@Param('id') id: number): User {
        return this.usersService.get(id);
    }

    @Get()
    list(): User[] {
        return this.usersService.list();
    }

    @Post()
    create(@Body() createCatDto: CreateUserDto) {
        this.usersService.create(createCatDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        this.usersService.delete(id);
    }
}
