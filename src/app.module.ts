import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.service';
// import { UserResolver } from './users/user.resolver';
// import { PetsModule } from './pets/pets.module';
import { PetsResolver } from './pets/pets.resolver';
import { PetsService } from './pets/pets.service';
import { PetsController } from './pets/pets.controller';
import { UsersController } from './users/users.controller';
import { UserResolver } from './users/user.resolver';
import { UsersService } from './users/users.service';
import { PetsModule } from './pets/pets.module';

@Module({
  controllers: [UsersController],

  providers:[ UserResolver,UsersService,],
 
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
    }),
    PetsModule,
  ],
})
export class AppModule {}
