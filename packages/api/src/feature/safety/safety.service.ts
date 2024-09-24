import { Injectable } from "@nestjs/common";
import {
  ApiSafe001RequestBody,
  ApiSafe001ResponseOK,
} from "@kamf-safety/interface/api/safety/apiSafe001";
import { SafetyRepository } from "./safety.repository";

@Injectable()
export class SafetyService {
  constructor(private readonly safetyRepository: SafetyRepository) {}

  async postCount(body: ApiSafe001RequestBody): Promise<ApiSafe001ResponseOK> {
    await this.safetyRepository.postCount(
      body.userId,
      body.increment,
      body.decrement,
    );
    const total = await this.safetyRepository.getTotal();
    return { total };
  }
}
