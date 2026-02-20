import * as schema from "@shared/schema";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { Pool } from "pg";

export let db: NodePgDatabase<typeof schema> | null = null;
export let pool: Pool | null = null;

export async function initDb(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    console.warn("[db] DATABASE_URL not set — using in-memory storage for contacts.");
    return;
  }

  const { drizzle } = await import("drizzle-orm/node-postgres");
  const pg = await import("pg");
  const PgPool = pg.default?.Pool ?? (pg as any).Pool;
  pool = new PgPool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}