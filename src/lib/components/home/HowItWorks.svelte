<script lang="ts">
  import { Search, Puzzle, Sprout, Trophy } from "@lucide/svelte";

  const steps = [
    {
      id: 1,
      title: "Discover advisors",
      color: "text-blue-600",
      description:
        "Browse through our curated list of mentors, experts, and advisors across different fields.",
      icon: Search,
    },
    {
      id: 2,
      title: "Build your tribe",
      color: "text-red-400",
      description:
        "Add advisors to your personal board based on your needs, goals, and challenges.",
      icon: Puzzle,
    },
    {
      id: 3,
      title: "Connect & grow",
      color: "text-green-600",
      description:
        "Schedule sessions, ask questions, and get personalized guidance from your tribe.",
      icon: Sprout,
    },
    {
      id: 4,
      title: "Achieve your goals",
      color: "text-yellow-500",
      description:
        "Leverage collective wisdom to overcome obstacles and reach your full potential.",
      icon: Trophy,
    },
  ];
</script>

<section
  id="how-it-works"
  class="py-16 bg-gradient-to-b from-white to-muted/30"
>
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto mb-16 text-center">
      <h2 class="text-3xl font-bold mb-3">How Advisor Tribe Works</h2>
      <p class="text-muted-foreground text-lg">
        Your journey to building a powerful personal board of advisors is simple
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {#each steps as step}
        <div class="relative">
          {#if step.id < steps.length}
            <div
              class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-muted"
            >
              <div
                class="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full transform"
              >
                <svg
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0L20 4L16 8V0Z" fill="#D1D5DB" />
                  <path d="M0 4H16" stroke="#D1D5DB" stroke-width="2" />
                </svg>
              </div>
            </div>
          {/if}
          <div
            class="bg-white rounded-xl border p-6 h-full flex flex-col items-center text-center"
          >
            <div class="h-16 w-16 flex items-center justify-center mb-4">
              <svelte:component this={step.icon} size={32} class={step.color} />
            </div>
            <div
              class="px-3 py-1 rounded-full bg-tribe-100 text-tribe-700 text-sm font-medium mb-3"
            >
              Step {step.id}
            </div>
            <h3 class="text-xl font-semibold mb-3">{step.title}</h3>
            <p class="text-muted-foreground">{step.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
