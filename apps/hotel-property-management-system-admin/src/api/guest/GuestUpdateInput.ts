import { ReservationUpdateManyWithoutGuestsInput } from "./ReservationUpdateManyWithoutGuestsInput";

export type GuestUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loyaltyPoints?: number | null;
  phone?: string | null;
  reservations?: ReservationUpdateManyWithoutGuestsInput;
};
