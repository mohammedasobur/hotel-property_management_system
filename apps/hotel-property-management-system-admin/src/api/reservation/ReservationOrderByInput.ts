import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  createdAt?: SortOrder;
  guestId?: SortOrder;
  id?: SortOrder;
  roomNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
