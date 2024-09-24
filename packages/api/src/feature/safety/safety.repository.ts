import { Safety } from "@kamf-safety/api/drizzle/schema/safety.schema";
import { Inject, Injectable } from "@nestjs/common";
import { MySql2Database } from "drizzle-orm/mysql2";
import { sql, inArray, eq, desc } from "drizzle-orm";

import { DrizzleAsyncProvider } from "src/drizzle/drizzle.provider";

@Injectable()
export class SafetyRepository {
  constructor(@Inject(DrizzleAsyncProvider) private db: MySql2Database) {}

  async postCount(userId: string, increment: number, decrement: number) {
    return this.db
      .insert(Safety)
      .values({
        userId,
        increment,
        decrement,
      })
      .execute();
  }

  async getTotal() {
    const results = await this.db
      .select({
        userId: Safety.userId,
        totalIncrement: sql<number>`SUM(${Safety.increment})`.as<number>(
          "totalIncrement",
        ), // number로 명시
        totalDecrement: sql<number>`SUM(${Safety.decrement})`.as<number>(
          "totalDecrement",
        ), // number로 명시
      })
      .from(Safety)
      .where(
        inArray(
          Safety.createdAt,
          this.db
            .select({ maxCreatedAt: sql`MAX(${Safety.createdAt})` })
            .from(Safety)
            .groupBy(Safety.userId),
        ),
      )
      .groupBy(Safety.userId)
      .execute();

    const total = results.reduce(
      (acc, row) =>
        acc + ((row.totalIncrement || 0) - (row.totalDecrement || 0)),
      0,
    );

    return total;
  }

  async getCountByUserId(userId: string) {
    return this.db
      .select({
        userId: Safety.userId,
        increment: Safety.increment,
        decrement: Safety.decrement,
      })
      .from(Safety)
      .where(eq(Safety.userId, userId))
      .orderBy(desc(Safety.createdAt))
      .limit(1)
      .then(res => res[0]);
  }
}
