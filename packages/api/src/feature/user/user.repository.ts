import { Inject, Injectable } from "@nestjs/common";
import { User } from "@kamf-safety/api/drizzle/schema/user.schema";
import { MySql2Database } from "drizzle-orm/mysql2";

import { DrizzleAsyncProvider } from "src/drizzle/drizzle.provider";
import { and, eq } from "drizzle-orm";

@Injectable()
export class UserRepository {
  constructor(@Inject(DrizzleAsyncProvider) private db: MySql2Database) {}

  async getUserByIdAndPassword(id: number, password: string) {
    return this.db
      .select()
      .from(User)
      .where(and(eq(User.studentId, id), eq(User.password, password)))
      .then(res => res[0]);
  }
}
