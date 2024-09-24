import { int, timestamp, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { User } from "./user.schema";

export const Safety = mysqlTable("safety", {
  id: int("id").autoincrement().primaryKey(),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .references(() => User.id),
  increment: int("increment").notNull(),
  decrement: int("decrement").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  deletedAt: timestamp("deleted_at"),
});
