import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

// creating the Schema
export const USER_TABLE = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  isMember: boolean('is_member').default(false),
});
