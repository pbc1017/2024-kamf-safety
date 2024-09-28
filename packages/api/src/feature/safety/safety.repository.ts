import { Safety } from "@kamf-safety/api/drizzle/schema/safety.schema";
import { Inject, Injectable } from "@nestjs/common";
import { MySql2Database } from "drizzle-orm/mysql2";
import { sql, eq, desc, and, between } from "drizzle-orm";

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
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0,
    );
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
    );

    // 서브쿼리 정의
    const subquery = this.db
      .select({
        userId: Safety.userId,
        latestCreatedAt: sql<Date>`MAX(${Safety.createdAt})`.as<Date>(
          "latestCreatedAt",
        ),
      })
      .from(Safety)
      .where(between(Safety.createdAt, startOfDay, endOfDay))
      .groupBy(Safety.userId)
      .as("latestRecords");

    const results = await this.db
      .select({
        userId: Safety.userId,
        increment: sql<number>`MAX(${Safety.increment})`.as<number>(
          "increment",
        ),
        decrement: sql<number>`MAX(${Safety.decrement})`.as<number>(
          "decrement",
        ),
        createdAt: sql<Date>`MAX(${Safety.createdAt})`.as<Date>("createdAt"), // MAX() 사용
      })
      .from(Safety)
      .leftJoin(
        subquery,
        and(
          eq(Safety.userId, subquery.userId),
          eq(Safety.createdAt, subquery.latestCreatedAt),
        ),
      )
      .groupBy(Safety.userId)
      .execute();

    const total = results.reduce(
      (acc, row) => acc + ((row.increment || 0) - (row.decrement || 0)),
      0,
    );

    return total;
  }

  async getCountByUserId(userId: string) {
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0,
    );
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
    );

    return (
      this.db
        .select({
          userId: Safety.userId,
          increment: Safety.increment,
          decrement: Safety.decrement,
        })
        .from(Safety)
        // createdAt이 오늘인 것 중에서 가장 최근 것을 가져옴
        .where(
          and(
            eq(Safety.userId, userId),
            between(Safety.createdAt, startOfDay, endOfDay),
          ),
        )
        .orderBy(desc(Safety.createdAt))
        .limit(1)
        .then(res => res[0])
    );
  }
}
