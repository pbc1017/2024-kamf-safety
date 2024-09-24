import { Injectable } from "@nestjs/common";
import { SafetyRepository } from "./safety.repository";

@Injectable()
export class SafetyService {
  constructor(private readonly safetyRepository: SafetyRepository) {}
}
