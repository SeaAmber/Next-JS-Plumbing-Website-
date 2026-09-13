import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

export const bookings = sqliteTable("bookings", {
	id: integer().primaryKey({ autoIncrement: true }),
	fullName: text("full_name").notNull(),
	email: text().notNull(),
	phone: text().notNull(),
	serviceNeeded: text("service_needed").notNull(),
	message: text().notNull(),
});

