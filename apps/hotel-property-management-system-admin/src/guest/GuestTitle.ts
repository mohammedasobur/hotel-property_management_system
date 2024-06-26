import { Guest as TGuest } from "../api/guest/Guest";

export const GUEST_TITLE_FIELD = "firstName";

export const GuestTitle = (record: TGuest): string => {
  return record.firstName?.toString() || String(record.id);
};
