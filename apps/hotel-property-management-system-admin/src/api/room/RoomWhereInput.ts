import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  roomNumber?: StringNullableFilter;
  roomType?: "Option1";
  status?: "Option1";
};
