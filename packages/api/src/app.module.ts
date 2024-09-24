import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DrizzleModule } from "./drizzle/drizzle.module";
import { UserModule } from "./feature/user/user.module";
import { SafetyModule } from "./feature/safety/safety.module";

@Module({
  imports: [DrizzleModule, UserModule, SafetyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
