import { NestFactory } from "@nestjs/core";
import { env } from "@kamf-safety/api/env";
import { HttpException } from "@nestjs/common";
import { ZodError } from "zod";
import { AppModule } from "./app.module";
import {
  HttpExceptionFilter,
  UnexpectedExceptionFilter,
  ZodErrorFilter,
} from "./common/util/exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.SERVER_PORT);
  // localhost에서의 cors 해결
  if (process.env.NODE_ENV === "development") {
    app.enableCors({
      origin: `http://localhost:${process.env.CLIENT_PORT}`,
      credentials: true,
    });
    app.useGlobalFilters(
      new ZodErrorFilter<ZodError>(),
      new HttpExceptionFilter<HttpException>(),
    );
  } else {
    app.useGlobalFilters(
      new UnexpectedExceptionFilter(),
      new ZodErrorFilter<ZodError>(),
      new HttpExceptionFilter<HttpException>(),
    );
  }
  await app.listen(env.SERVER_PORT);
}
bootstrap();
