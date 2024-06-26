import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type GuestWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  loyaltyPoints?: IntNullableFilter;
  phone?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};
