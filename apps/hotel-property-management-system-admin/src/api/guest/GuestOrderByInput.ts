import { SortOrder } from "../../util/SortOrder";

export type GuestOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  loyaltyPoints?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
