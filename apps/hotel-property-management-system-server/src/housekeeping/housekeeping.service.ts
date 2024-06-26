import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HousekeepingServiceBase } from "./base/housekeeping.service.base";

@Injectable()
export class HousekeepingService extends HousekeepingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
