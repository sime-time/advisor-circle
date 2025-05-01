import { db } from "$lib/server/drizzle/db";
import { advisor } from "$lib/server/drizzle/schema/advisor-schema";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const {
    userId,
    price,
    tagline,
    bio,
    city,
    state,
    country,
  } = await request.json();

  try {
    await db.insert(advisor).values({
      userId: userId,
      tagline: tagline,
      bio: bio,
      price: price,
      city: city,
      state: state,
      country: country,
    });

    return json({
      success: true,
      message: "Advisor created successfully"
    }, { status: 201 });

  } catch (err) {
    console.error("Failed to create advisor", err);
    return json({
      success: false,
      message: "Failed to create advisor"
    }, { status: 500 })
  }
}
