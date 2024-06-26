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
import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsInt,
  Min,
  Max,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { GuestWhereUniqueInput } from "../../guest/base/GuestWhereUniqueInput";
import { EnumReservationStatus } from "./EnumReservationStatus";

@InputType()
class ReservationUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  checkInDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  checkOutDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => GuestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GuestWhereUniqueInput)
  @IsOptional()
  @Field(() => GuestWhereUniqueInput, {
    nullable: true,
  })
  guest?: GuestWhereUniqueInput | null;

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
    enum: EnumReservationStatus,
  })
  @IsEnum(EnumReservationStatus)
  @IsOptional()
  @Field(() => EnumReservationStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ReservationUpdateInput as ReservationUpdateInput };