import { Resolver, Query, Args } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";

@Resolver(of => User)
export class UserResolver {
    constructor(private userService: UsersService){}

    // @Query(returns => [User])
    // todo(): Promise <User[]> {
    //     return this.userService.getTodoList();
    // }
    
    @Query((returns) => User)
    async todo (@Args('id')id: string) {
        return this.userService.getTodo(id);
      }


}