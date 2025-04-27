<script lang="ts">
  import AdvisorList from "$lib/components/advisor/AdvisorList.svelte";
  import { advisors } from "$lib/data/advisorData";
</script>

<div class="min-h-screen flex flex-col">
  <main class="flex-grow">
    <div class="bg-muted/30 py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-2">Browse Advisors</h1>
        <p class="text-muted-foreground">
          Find the perfect advisors to join your personal board and help you
          navigate life's challenges
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <AdvisorList {advisors} addedAdvisors={[]} />
      </div>
    </div>
  </main>
</div>
