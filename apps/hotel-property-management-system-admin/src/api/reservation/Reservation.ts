import { Guest } from "../guest/Guest";

export type Reservation = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  guest?: Guest | null;
  id: string;
  roomNumber: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
