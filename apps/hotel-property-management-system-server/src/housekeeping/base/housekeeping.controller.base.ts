/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HousekeepingService } from "../housekeeping.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HousekeepingCreateInput } from "./HousekeepingCreateInput";
import { Housekeeping } from "./Housekeeping";
import { HousekeepingFindManyArgs } from "./HousekeepingFindManyArgs";
import { HousekeepingWhereUniqueInput } from "./HousekeepingWhereUniqueInput";
import { HousekeepingUpdateInput } from "./HousekeepingUpdateInput";
import { HousekeepingStatusUpdateInput } from "../HousekeepingStatusUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HousekeepingControllerBase {
  constructor(
    protected readonly service: HousekeepingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Housekeeping })
  @nestAccessControl.UseRoles({
    resource: "Housekeeping",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: HousekeepingCreateInput,
  })
  async createHousekeeping(
    @common.Body() data: HousekeepingCreateInput
  ): Promise<Housekeeping> {
    return await this.service.createHousekeeping({
      data: data,
      select: {
        createdAt: true,
        date: true,
        id: true,
        roomNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Housekeeping] })
  @ApiNestedQuery(HousekeepingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Housekeeping",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async housekeepings(@common.Req() request: Request): Promise<Housekeeping[]> {
    const args = plainToClass(HousekeepingFindManyArgs, request.query);
    return this.service.housekeepings({
      ...args,
      select: {
        createdAt: true,
        date: true,
        id: true,
        roomNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Housekeeping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Housekeeping",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async housekeeping(
    @common.Param() params: HousekeepingWhereUniqueInput
  ): Promise<Housekeeping | null> {
    const result = await this.service.housekeeping({
      where: params,
      select: {
        createdAt: true,
        date: true,
        id: true,
        roomNumber: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Housekeeping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Housekeeping",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: HousekeepingUpdateInput,
  })
  async updateHousekeeping(
    @common.Param() params: HousekeepingWhereUniqueInput,
    @common.Body() data: HousekeepingUpdateInput
  ): Promise<Housekeeping | null> {
    try {
      return await this.service.updateHousekeeping({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          id: true,
          roomNumber: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Housekeeping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Housekeeping",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHousekeeping(
    @common.Param() params: HousekeepingWhereUniqueInput
  ): Promise<Housekeeping | null> {
    try {
      return await this.service.deleteHousekeeping({
        where: params,
        select: {
          createdAt: true,
          date: true,
          id: true,
          roomNumber: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/modify-housekeeping-status")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ModifyHousekeepingStatus(
    @common.Body()
    body: HousekeepingStatusUpdateInput
  ): Promise<string> {
    return this.service.ModifyHousekeepingStatus(body);
  }

  @common.Get("/:id/update-housekeeping-status")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateHousekeepingStatus(
    @common.Body()
    body: HousekeepingStatusUpdateInput
  ): Promise<string> {
    return this.service.UpdateHousekeepingStatus(body);
  }

  @common.Post("/housekeeping-room-status-update")
  @swagger.ApiOkResponse({
    type: Housekeeping,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateRoomHousekeepingStatus(
    @common.Body()
    body: HousekeepingStatusUpdateInput
  ): Promise<Housekeeping> {
    return this.service.UpdateRoomHousekeepingStatus(body);
  }
}