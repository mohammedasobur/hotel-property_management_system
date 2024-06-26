import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HousekeepingModuleBase } from "./base/housekeeping.module.base";
import { HousekeepingService } from "./housekeeping.service";
import { HousekeepingController } from "./housekeeping.controller";
import { HousekeepingResolver } from "./housekeeping.resolver";

@Module({
  imports: [HousekeepingModuleBase, forwardRef(() => AuthModule)],
  controllers: [HousekeepingController],
  providers: [HousekeepingService, HousekeepingResolver],
  exports: [HousekeepingService],
})
export class HousekeepingModule {}
