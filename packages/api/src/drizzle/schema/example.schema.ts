import { int, varchar, timestamp, mysqlTable } from "drizzle-orm/mysql-core";

export const Example = mysqlTable("example", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("title", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  deletedAt: timestamp("deleted_at"),
});
