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
import { HousekeepingWhereInput } from "./HousekeepingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HousekeepingOrderByInput } from "./HousekeepingOrderByInput";

@ArgsType()
class HousekeepingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HousekeepingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HousekeepingWhereInput, { nullable: true })
  @Type(() => HousekeepingWhereInput)
  where?: HousekeepingWhereInput;

  @ApiProperty({
    required: false,
    type: [HousekeepingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HousekeepingOrderByInput], { nullable: true })
  @Type(() => HousekeepingOrderByInput)
  orderBy?: Array<HousekeepingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HousekeepingFindManyArgs as HousekeepingFindManyArgs };
