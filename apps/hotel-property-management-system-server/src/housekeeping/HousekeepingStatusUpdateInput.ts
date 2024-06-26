import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
class HousekeepingStatusUpdateInput {
    @Field(() => Date)
    @Type(() => Date)
    date!: Date;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    roomNumber!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;
}

export { HousekeepingStatusUpdateInput as HousekeepingStatusUpdateInput };