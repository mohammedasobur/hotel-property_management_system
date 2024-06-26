import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roomNumber?: SortOrder;
  roomType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
