import * as schema from "@shared/schema";

// Only import pg/drizzle if DATABASE_URL is provided
export let db: ReturnType<typeof import("drizzle-orm/node-postgres").drizzle> | null = null;
export let pool: import("pg").Pool | null = null;

if (process.env.DATABASE_URL) {
  const { drizzle } = await import("drizzle-orm/node-postgres");
  const pg = await import("pg");
  const { Pool } = pg.default;
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
} else {
  console.warn("[db] DATABASE_URL not set — using in-memory storage for contacts.");
}