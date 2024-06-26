import { ReservationCreateNestedManyWithoutGuestsInput } from "./ReservationCreateNestedManyWithoutGuestsInput";

export type GuestCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loyaltyPoints?: number | null;
  phone?: string | null;
  reservations?: ReservationCreateNestedManyWithoutGuestsInput;
};
