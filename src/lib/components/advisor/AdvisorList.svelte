<script lang="ts">
  import { Search } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/button";
  import AdvisorCard from "./AdvisorCard.svelte";
  import type { Advisor } from "$lib/data/advisorData.ts";

  interface ListProps {
    advisors: Advisor[];
    addedAdvisors: number[];
  }

  let { advisors, addedAdvisors }: ListProps = $props();
</script>

<div>
  {#if advisors.length === 0}
    <div class="col-span-full py-12 text-center">
      <div
        class="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-muted mb-4"
      >
        <Search class="h-12 w-12 text-muted-foreground/50" />
      </div>
      <h3 class="text-xl font-semibold mb-2">No advisors found</h3>
      <p class="text-muted-foreground mb-6">
        Try adjusting your filters or search terms to find more advisors.
      </p>
      <Button variant="outline">Clear all filters</Button>
    </div>
  {:else}
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {#each advisors as advisor (advisor.id)}
        <AdvisorCard
          {advisor}
          isAdded={addedAdvisors.includes(advisor.id)}
          isWaitlisted={false}
        />
      {/each}
    </div>
  {/if}
</div>
