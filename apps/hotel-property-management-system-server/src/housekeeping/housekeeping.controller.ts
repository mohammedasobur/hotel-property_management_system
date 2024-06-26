import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HousekeepingService } from "./housekeeping.service";
import { HousekeepingControllerBase } from "./base/housekeeping.controller.base";

@swagger.ApiTags("housekeepings")
@common.Controller("housekeepings")
export class HousekeepingController extends HousekeepingControllerBase {
  constructor(
    protected readonly service: HousekeepingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
