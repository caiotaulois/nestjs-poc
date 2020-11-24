import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
    async get(id: number): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async list(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    create(newUser: User): Promise<User> {
        const user = new this.userModel(newUser);
        return user.save();
    }

    update(id: number, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user).exec();
    }

    delete(id: number) {
        this.userModel.findByIdAndDelete(id).exec();
    }
}
