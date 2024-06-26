import { SortOrder } from "../../util/SortOrder";

export type StaffOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
