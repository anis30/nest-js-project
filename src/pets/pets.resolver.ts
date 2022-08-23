import { Resolver, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pets } from './pet.entity';

@Resolver(of=>Pets)
export class PetsResolver {
    constructor(private petsService: PetsService){}

    @Query(returns => [Pets])
    pets(): Promise <Pets[]> {
        return this.petsService.getPetsList();
    }
}
