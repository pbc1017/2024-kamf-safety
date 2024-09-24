import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ZodPipe } from "@kamf-safety/api/common/pipe/zod.pipe";
import apiSafe001, {
  ApiSafe001RequestBody,
  ApiSafe001ResponseOK,
} from "@kamf-safety/interface/api/safety/apiSafe001";
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
}
