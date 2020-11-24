import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get(':id')
    async get(@Param('id') id: number): Promise<User> {
        return this.usersService.get(id);
    }

    @Get()
    async list(): Promise<User[]> {
        return this.usersService.list();
    }

    @Post()
    async create(@Body() user: User) {
        return this.usersService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User) {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.usersService.delete(id);
    }
}
