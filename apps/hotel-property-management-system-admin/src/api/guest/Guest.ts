import { Reservation } from "../reservation/Reservation";

export type Guest = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loyaltyPoints: number | null;
  phone: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
