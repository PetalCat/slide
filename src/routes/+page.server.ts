import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  // Redirect logged-in users to dashboard
  if (locals.user) {
    throw redirect(303, "/dashboard");
  }

  return {};
};
