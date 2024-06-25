import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
export const games = sqliteTable("games", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
});
export const genres = sqliteTable("genres", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
});
