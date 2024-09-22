import { int, timestamp, mysqlTable } from "drizzle-orm/mysql-core";
import { User } from "./user.schema";

export const Safety = mysqlTable("safety", {
  id: int("id").autoincrement().primaryKey(),
  studentId: int("student_id")
    .notNull()
    .references(() => User.studentId),
  increament: int("increament").notNull(),
  decreament: int("decreament").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  deletedAt: timestamp("deleted_at"),
});
