import { NextResponse } from "next/server";
import mysql, { RowDataPacket } from "mysql2/promise";

export const runtime = "nodejs";

type CategoryRow = RowDataPacket & {
  id: string;
  name: string;
  slug?: string | null;
  image_url?: string | null;
};

const dbPassword = process.env.DB_PASSWORD ?? process.env.DB_PASS;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER,
  password: dbPassword,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export async function GET() {
  try {
    if (!dbPassword) {
      throw new Error("Missing DB password. Check DB_PASSWORD in .env.local");
    }

    let categories: CategoryRow[] = [];

    try {
      const [rows] = await pool.query<CategoryRow[]>(
        "SELECT id, name, slug, image_url FROM categories ORDER BY id DESC LIMIT 200"
      );
      categories = rows;
    } catch {
      const [rows] = await pool.query<CategoryRow[]>(
        "SELECT id, name, slug FROM categories ORDER BY id DESC LIMIT 200"
      );
      categories = rows;
    }

    const mappedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug
        ? normalizeSlug(category.slug)
        : normalizeSlug(category.name),
      image: category.image_url ?? null,
    }));

    return NextResponse.json({ categories: mappedCategories });
  } catch (error) {
    console.error("Categories API error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to load categories.";
    return NextResponse.json({ categories: [], error: message }, { status: 500 });
  }
}
