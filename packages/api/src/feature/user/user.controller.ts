import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ZodPipe } from "@kamf-safety/api/common/pipe/zod.pipe";
import apiUser001, {
  ApiUser001RequestBody,
  ApiUser001ResponseOK,
} from "@kamf-safety/interface/api/user/apiUser001";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/login")
  @UsePipes(new ZodPipe(apiUser001))
  async postLogin(
    @Body() body: ApiUser001RequestBody,
  ): Promise<ApiUser001ResponseOK> {
    return this.userService.postLogin(body);
  }
}
