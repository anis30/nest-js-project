import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiQuery,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}


  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  async getUsers(): Promise<any> {
    return await this.usersService.getTodoList();
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  @Get(':id')
  getByUserId(@Param('id')id: string) {
    
    const user= this.usersService.getTodo(id); 
    if(!user){
        throw new NotFoundException();     //if user was no found
    }
    return user;
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body) {
    return this.usersService.createToDo(body);
  }

  @ApiCreatedResponse({ type: User })
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.usersService.updateToDo(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // const idInteger = parseInt(id);
    return this.usersService.removeToDo(id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}
