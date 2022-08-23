import { ArgsType, Field, Int, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType()
export class User{
    @ApiProperty()
    @Field({nullable:true}) //for specifying whether a field is nullable
    id: string;
    
    @ApiProperty()
    @Field({nullable:true})
    text: string;

    
}