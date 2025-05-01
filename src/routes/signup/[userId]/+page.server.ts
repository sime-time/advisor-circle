import { db } from "$lib/server/drizzle/db";
import { user } from "$lib/server/drizzle/schema/auth-schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const userResult = await db.select({ name: user.name }).from(user).where(eq(user.id, params.userId))
  const userName = userResult[0].name;
  return { userId: params.userId, userName: userName };
}
