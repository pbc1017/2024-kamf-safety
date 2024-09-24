import { Injectable, NotFoundException } from "@nestjs/common";
import {
  ApiUser001RequestBody,
  ApiUser001ResponseOK,
} from "@kamf-safety/interface/api/user/apiUser001";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async postLogin(body: ApiUser001RequestBody): Promise<ApiUser001ResponseOK> {
    const user = await this.userRepository.getUserByIdAndPassword(
      body.studentId,
      body.password,
    );

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return {
      userId: user.id,
    };
  }
}
