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
import { ReservationService } from "../reservation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReservationCreateInput } from "./ReservationCreateInput";
import { Reservation } from "./Reservation";
import { ReservationFindManyArgs } from "./ReservationFindManyArgs";
import { ReservationWhereUniqueInput } from "./ReservationWhereUniqueInput";
import { ReservationUpdateInput } from "./ReservationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ReservationControllerBase {
  constructor(
    protected readonly service: ReservationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reservation })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ReservationCreateInput,
  })
  async createReservation(
    @common.Body() data: ReservationCreateInput
  ): Promise<Reservation> {
    return await this.service.createReservation({
      data: {
        ...data,

        guest: data.guest
          ? {
              connect: data.guest,
            }
          : undefined,
      },
      select: {
        checkInDate: true,
        checkOutDate: true,
        createdAt: true,

        guest: {
          select: {
            id: true,
          },
        },

        id: true,
        roomNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Reservation] })
  @ApiNestedQuery(ReservationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reservations(@common.Req() request: Request): Promise<Reservation[]> {
    const args = plainToClass(ReservationFindManyArgs, request.query);
    return this.service.reservations({
      ...args,
      select: {
        checkInDate: true,
        checkOutDate: true,
        createdAt: true,

        guest: {
          select: {
            id: true,
          },
        },

        id: true,
        roomNumber: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reservation(
    @common.Param() params: ReservationWhereUniqueInput
  ): Promise<Reservation | null> {
    const result = await this.service.reservation({
      where: params,
      select: {
        checkInDate: true,
        checkOutDate: true,
        createdAt: true,

        guest: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ReservationUpdateInput,
  })
  async updateReservation(
    @common.Param() params: ReservationWhereUniqueInput,
    @common.Body() data: ReservationUpdateInput
  ): Promise<Reservation | null> {
    try {
      return await this.service.updateReservation({
        where: params,
        data: {
          ...data,

          guest: data.guest
            ? {
                connect: data.guest,
              }
            : undefined,
        },
        select: {
          checkInDate: true,
          checkOutDate: true,
          createdAt: true,

          guest: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteReservation(
    @common.Param() params: ReservationWhereUniqueInput
  ): Promise<Reservation | null> {
    try {
      return await this.service.deleteReservation({
        where: params,
        select: {
          checkInDate: true,
          checkOutDate: true,
          createdAt: true,

          guest: {
            select: {
              id: true,
            },
          },

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

  @common.Post("/new-booking")
  @swagger.ApiOkResponse({
    type: Reservation,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AddNewBooking(
    @common.Body()
    body: string
  ): Promise<Reservation> {
    return this.service.AddNewBooking(body);
  }

  @common.Post("/check-in")
  @swagger.ApiOkResponse({
    type: Reservation,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CheckInGuest(
    @common.Body()
    body: string
  ): Promise<Reservation> {
    return this.service.CheckInGuest(body);
  }

  @common.Post("/check-out")
  @swagger.ApiOkResponse({
    type: Reservation,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CheckOutGuest(
    @common.Body()
    body: string
  ): Promise<Reservation> {
    return this.service.CheckOutGuest(body);
  }

  @common.Get("/:id/create-booking")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateBooking(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.CreateBooking(body);
  }

  @common.Get("/:id/create-booking")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateBooking(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.CreateBooking(body);
  }
}
