import { Controller } from "@nestjs/common";
import { SafetyService } from "./safety.service";

@Controller()
export class SafetyController {
  constructor(private readonly safetyService: SafetyService) {}
}
