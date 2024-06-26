import { Staff as TStaff } from "../api/staff/Staff";

export const STAFF_TITLE_FIELD = "firstName";

export const StaffTitle = (record: TStaff): string => {
  return record.firstName?.toString() || String(record.id);
};
