import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "roomNumber";

export const RoomTitle = (record: TRoom): string => {
  return record.roomNumber?.toString() || String(record.id);
};
