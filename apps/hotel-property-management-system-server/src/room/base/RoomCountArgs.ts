/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomWhereInput } from "./RoomWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RoomCountArgs {
  @ApiProperty({
    required: false,
    type: () => RoomWhereInput,
  })
  @Field(() => RoomWhereInput, { nullable: true })
  @Type(() => RoomWhereInput)
  where?: RoomWhereInput;
}

export { RoomCountArgs as RoomCountArgs };
