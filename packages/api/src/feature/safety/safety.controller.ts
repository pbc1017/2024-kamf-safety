import { Body, Controller, Get, Post, Query, UsePipes } from "@nestjs/common";
import { ZodPipe } from "@kamf-safety/api/common/pipe/zod.pipe";
import apiSafe001, {
  ApiSafe001RequestBody,
  ApiSafe001ResponseOK,
} from "@kamf-safety/interface/api/safety/apiSafe001";
import apiSafe002, {
  ApiSafe002RequestQuery,
  ApiSafe002ResponseOK,
} from "@kamf-safety/interface/api/safety/apiSafe002";
import { SafetyService } from "./safety.service";

@Controller()
export class SafetyController {
  constructor(private readonly safetyService: SafetyService) {}

  @Post("/count")
  @UsePipes(new ZodPipe(apiSafe001))
  async postCount(
    @Body() body: ApiSafe001RequestBody,
  ): Promise<ApiSafe001ResponseOK> {
    return this.safetyService.postCount(body);
  }

  @Get("/count")
  @UsePipes(new ZodPipe(apiSafe002))
  async getCount(
    @Query() query: ApiSafe002RequestQuery,
  ): Promise<ApiSafe002ResponseOK> {
    return this.safetyService.getCount(query);
  }
}
