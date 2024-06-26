import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";

export type ReservationCreateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  guest?: GuestWhereUniqueInput | null;
  roomNumber?: number | null;
  status?: "Option1" | null;
};
