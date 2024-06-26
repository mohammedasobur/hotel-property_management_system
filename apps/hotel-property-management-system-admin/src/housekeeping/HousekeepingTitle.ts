import { Housekeeping as THousekeeping } from "../api/housekeeping/Housekeeping";

export const HOUSEKEEPING_TITLE_FIELD = "id";

export const HousekeepingTitle = (record: THousekeeping): string => {
  return record.id?.toString() || String(record.id);
};
