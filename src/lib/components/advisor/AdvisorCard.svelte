<script lang="ts">
  import { Star, Check, Plus, MapPin, ListPlus } from "@lucide/svelte";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent } from "$lib/components/ui/card";
  import toast from "svelte-5-french-toast";
  import { categories, type Advisor } from "$lib/data/advisorData";

  interface AdvisorCardProps {
    advisor: Advisor;
    isInvited: boolean;
  }

  let { advisor, isInvited }: AdvisorCardProps = $props();

  function handleInviteAdvisor(id: number) {
    isInvited = true;
    toast.success("Advisor added to your tribe!");
  }
</script>

<Card class="hover:shadow-md transition-shadow">
  <CardContent class="p-6">
    <div class="flex justify-between items-start mb-4">
      <a href={`/advisor/${advisor.id}`} class="flex items-center gap-4">
        <Avatar class="h-16 w-16 border-2 border-background">
          <AvatarImage src={advisor.image} alt={advisor.name} />
          <AvatarFallback
            >{advisor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}</AvatarFallback
          >
        </Avatar>
      </a>
      <div class="flex items-center gap-1 px-2 py-1 bg-muted rounded-full">
        <Star class="h-4 w-4 fill-tribe-500 text-tribe-500" />
        <span class="font-medium text-sm">{advisor.rating}</span>
      </div>
    </div>

    <a href={`/advisor/${advisor.id}`} class="block group">
      <h3
        class="text-xl font-semibold mb-1 group-hover:text-tribe-600 transition-colors"
      >
        {advisor.name}
      </h3>
      <p class="text-muted-foreground mb-2">{advisor.title}</p>
    </a>

    <div class="flex items-center gap-1 text-muted-foreground text-sm mb-3">
      <MapPin class="h-4 w-4" />
      <span>{advisor.location.city}, {advisor.location.state}</span>
    </div>

    <p class="text-sm mb-4 line-clamp-2">{advisor.bio}</p>

    <div class="flex flex-wrap gap-2 mb-4">
      {#each advisor.categories as category}
        <Badge variant="secondary">
          {categories.get(category || 0)}
        </Badge>
      {/each}
    </div>

    <div class="flex justify-between items-center mb-4">
      <div class="text-sm">
        <span class="font-medium">Price per month:</span>{" "}
        <span class={advisor.price === 0 ? "text-teal-600" : ""}>
          {advisor.price}
        </span>
      </div>
    </div>

    <Button
      class={isInvited
        ? "bg-soft-purple text-dark-purple hover:bg-soft-purple/80 w-full"
        : "bg-tribe-600 hover:bg-tribe-700 w-full"}
      disabled={isInvited}
      onclick={() => handleInviteAdvisor(advisor.id)}
    >
      {#if isInvited}
        <Check class="mr-2 h-4 w-4" /> Invited to Tribe
      {:else}
        <Plus class="mr-2 h-4 w-4" /> Invite to My Tribe
      {/if}
    </Button>
  </CardContent>
</Card>
