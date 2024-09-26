import { Injectable } from "@nestjs/common";
import {
  ApiSafe001RequestBody,
  ApiSafe001ResponseOK,
} from "@kamf-safety/interface/api/safety/apiSafe001";
import {
  ApiSafe002RequestQuery,
  ApiSafe002ResponseOK,
} from "@kamf-safety/interface/api/safety/apiSafe002";
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

  async getCount(query: ApiSafe002RequestQuery): Promise<ApiSafe002ResponseOK> {
    const count = await this.safetyRepository.getCountByUserId(query.userId);
    const total = await this.safetyRepository.getTotal();
    return {
      total,
      myIncrement: count?.increment || 0,
      myDecrement: count?.decrement || 0,
    };
  }
}
