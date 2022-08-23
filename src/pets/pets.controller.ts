import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Pets } from './pet.entity';
import { PetsService } from './pets.service';

@ApiTags('pets')
@Controller('pets')
export class PetsController {
    constructor(private petsService: PetsService){}

    @ApiOkResponse({type: Pets, isArray:true})
    @Get()
    async getPets():Promise<any>{
        return await this.petsService.getPetsList();
    }

    @ApiOkResponse({type: Pets})
    @Post()
    createPets(@Body() body){
        return this.petsService.createPets(body);
    }
}
