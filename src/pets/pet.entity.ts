import { Field, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType()
export class Pets{
    @ApiProperty()
    @Field({nullable:true})
    id: string;

    @ApiProperty()
    @Field({nullable:true})
    name: string;

    @ApiProperty()
    @Field({nullable:true})
    color: string;
}