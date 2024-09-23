import { Module } from "@nestjs/common";
import { DrizzleModule } from "src/drizzle/drizzle.module";
import { SafetyController } from "./safety.controller";
import { SafetyRepository } from "./safety.repository";
import { SafetyService } from "./safety.service";

@Module({
  imports: [DrizzleModule],
  controllers: [SafetyController],
  providers: [SafetyService, SafetyRepository],
})
export class SafetyModule {}
