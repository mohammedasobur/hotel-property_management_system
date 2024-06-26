import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HousekeepingResolverBase } from "./base/housekeeping.resolver.base";
import { Housekeeping } from "./base/Housekeeping";
import { HousekeepingService } from "./housekeeping.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Housekeeping)
export class HousekeepingResolver extends HousekeepingResolverBase {
  constructor(
    protected readonly service: HousekeepingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
