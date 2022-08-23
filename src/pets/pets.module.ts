import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { PetsController } from './pets.controller';

@Module({
  providers: [PetsService, PetsResolver],
  controllers: [PetsController]
})
export class PetsModule {}
