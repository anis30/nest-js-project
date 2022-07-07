import { Controller, Get, Param, Post, Body, Patch, Delete} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import {User} from './entities/user.entity';

@Controller('users')
export class UsersController {
   constructor(private usersService: UsersService){}

        @Get()
        getUsers():User[]{
            return this.usersService.findAll();
        }
       
        @Get(':id')
        getByUserId(@Param('id') id: string): User{
            return this.usersService.findById(Number(id));
        }

        @Post()
        createUser(@Body() body: CreateUserDto) : User{
            return this.usersService.createUser(body);
      }

        @Patch(':id')
        update(@Param('id') id: string, @Body() body: UpdateUserDto): User {
          return this.usersService.createUser(body);
      }

     
      @Delete(':id')
        remove(@Param('id') id: string) {  
            console.log(id)
            const idInteger = parseInt(id)

        return this.usersService.remove(idInteger);
    }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return `This action removes a #${id} cat`;
    // }
}
   

    
   
  
  
  
   
  
 
  
    
    

