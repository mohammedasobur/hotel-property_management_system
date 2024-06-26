import { HousekeepingWhereInput } from "./HousekeepingWhereInput";
import { HousekeepingOrderByInput } from "./HousekeepingOrderByInput";

export type HousekeepingFindManyArgs = {
  where?: HousekeepingWhereInput;
  orderBy?: Array<HousekeepingOrderByInput>;
  skip?: number;
  take?: number;
};
