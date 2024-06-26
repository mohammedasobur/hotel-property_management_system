import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type HousekeepingWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  roomNumber?: IntNullableFilter;
  status?: "Option1";
};
