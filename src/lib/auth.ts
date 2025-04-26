import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/drizzle/db";
import { PUBLIC_GOOGLE_CLIENT_ID } from "$env/static/public";
import { GOOGLE_CLIENT_SECRET } from "$env/static/private";
import * as authSchema from "./server/drizzle/schema/auth-schema"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    schema: authSchema,
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    },
  },
});
