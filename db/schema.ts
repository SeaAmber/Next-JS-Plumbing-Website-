import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const bookings = sqliteTable("bookings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceNeeded: text("service_needed").notNull(), 
  message: text("message").notNull(),
});