import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReservationWhereInput = {
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  guest?: GuestWhereUniqueInput;
  id?: StringFilter;
  roomNumber?: IntNullableFilter;
  status?: "Option1";
};
