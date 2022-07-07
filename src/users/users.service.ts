import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {User} from './entities/user.entity'

@Injectable()
export class UsersService {
    private users: User[] = [{id:0, name: 'Anis'}, {id:1, name: 'Aizat'}];

    findAll() : User[] {
        return this.users;
    }

    findById(userId:number): User{
        return this.users.find(user=>user.id==userId);
    }

    createUser(createUserDto: CreateUserDto): User{
        const newUser = {id: Date.now(), ...createUserDto};

        this.users.push(newUser);

        return newUser;
    }

    remove(userId:number) {
        const index: number = this.users.findIndex(user => user.id === userId);
      
        // -1 is returned when no findIndex() match is found
        if (index === -1) {
          throw ('Post not found.');      
        }
      
       return this.users.splice(index, 1);

      }
}
