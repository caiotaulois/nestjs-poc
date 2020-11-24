import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './interfaces';

@Injectable()
export class UsersService {
    
    get(id: number): User {
        return {
            name: 'usuario'
        };
    }

    list(): User[] {
        return [];
    }

    create(createCatDTO: CreateUserDto) {
        
    }

    update(id: number, updateUserDto: UpdateUserDto) {

    }

    delete(id: number) {
        
    }
}
