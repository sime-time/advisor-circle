<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Menu, X } from "@lucide/svelte";

  let menuOpen = $state(false);
</script>

<nav class="border-b sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
  <div class="container mx-auto px-4 py-3 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2">
      <div
        class="h-8 w-8 rounded-full bg-gradient-to-r from-council-purple to-council-blue flex items-center justify-center"
      >
        <span class="text-white font-bold">AC</span>
      </div>
      <span class="font-bold text-xl">Advisor Circle</span>
    </a>

    <div class="hidden md:flex items-center gap-8">
      <div class="flex gap-6">
        <a
          href="/explore"
          class="text-foreground/80 hover:text-primary transition-colors"
        >
          Explore
        </a>
        <a
          href="/dashboard"
          class="text-foreground/80 hover:text-primary transition-colors"
        >
          Dashboard
        </a>
      </div>

      <div class="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <a href="/login">Sign in</a>
        </Button>
        <Button size="sm" class="bg-tribe-600 hover:bg-tribe-700">
          <a href="/signup">Get Started</a>
        </Button>
      </div>
    </div>

    <button class="md:hidden" onclick={() => (menuOpen = !menuOpen)}>
      {#if menuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  {#if menuOpen}
    <div class="md:hidden px-4 py-4 border-t bg-background">
      <div class="flex flex-col gap-4">
        <a
          href="/explore"
          class="px-2 py-2 text-foreground/80 hover:text-primary transition-colors"
          onclick={() => (menuOpen = false)}
        >
          Explore
        </a>
        <a
          href="/dashboard"
          class="px-2 py-2 text-foreground/80 hover:text-primary transition-colors"
          onclick={() => (menuOpen = false)}
        >
          Dashboard
        </a>
        <div class="flex flex-col gap-2 pt-2">
          <Button variant="outline">
            <a href="/login" onclick={() => (menuOpen = false)}>Sign in</a>
          </Button>
          <Button class="bg-tribe-600 hover:bg-tribe-700">
            <a href="/signup" onclick={() => (menuOpen = false)}>Get Started</a>
          </Button>
        </div>
      </div>
    </div>
  {/if}
</nav>
