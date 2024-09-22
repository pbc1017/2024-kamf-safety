import { int, varchar, timestamp, mysqlTable } from "drizzle-orm/mysql-core";

import { v4 as uuidv4 } from "uuid";

function createId(): string {
  return uuidv4();
}

export const User = mysqlTable("user", {
  id: varchar("id", { length: 128 })
    .$defaultFn(() => createId())
    .primaryKey(),
  studentId: int("student_id").notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  deletedAt: timestamp("deleted_at"),
});
