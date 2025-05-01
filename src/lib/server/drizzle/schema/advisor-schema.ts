import { pgTable, text, timestamp, decimal, integer, serial } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const advisor = pgTable("advisor", {
  id: serial('id').primaryKey(),
  userId: text('user_id').unique().notNull().references(() => user.id, { onDelete: 'cascade' }),
  tagline: text('tagline').notNull(),
  rating: decimal('rating'),
  reviews: integer('reviews').default(0).notNull(),
  price: integer('price').notNull(),
  bio: text('bio'),
  city: text('city').notNull(),
  state: text('state').notNull(),
  country: text('country').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const category = pgTable("category", {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const advisorCategory = pgTable("advisor_category", {
  id: serial('id').primaryKey(),
  advisorId: integer('advisor_id').notNull().references(() => advisor.id, { onDelete: 'cascade' }),
  categoryId: integer('category_id').notNull().references(() => category.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});
