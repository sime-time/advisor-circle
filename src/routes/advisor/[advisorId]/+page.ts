import { advisors } from "$lib/data/advisorData";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const foundAdvisor = advisors.find(a => a.id == Number(params.advisorId));

  if (foundAdvisor) {
    return {
      advisorId: params.advisorId,
    };
  }

  throw error(404, "Advisor not found");
}
