/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsInt, Min, Max, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumHousekeepingStatus } from "./EnumHousekeepingStatus";

@InputType()
class HousekeepingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  roomNumber?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumHousekeepingStatus,
  })
  @IsEnum(EnumHousekeepingStatus)
  @IsOptional()
  @Field(() => EnumHousekeepingStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { HousekeepingCreateInput as HousekeepingCreateInput };
