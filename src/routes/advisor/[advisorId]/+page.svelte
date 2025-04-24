<script lang="ts">
  import {
    MapPin,
    Star,
    ArrowLeft,
    MessageSquare,
    Clock,
    Check,
    Plus,
    CalendarDays,
  } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/button";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import { Badge } from "$lib/components/ui/badge";
  import { Card, CardContent } from "$lib/components/ui/card";
  import { advisors, categories } from "$lib/data/advisorData";
  import toast from "svelte-5-french-toast";

  let { data } = $props();
  let { advisorId } = data;

  // find the advisor that matches the url parameter advisorId
  let advisor = $state(advisors.find((a) => a.id === Number(advisorId)));

  function handleAddAdvisor() {
    toast.success("Advisor added to your tribe!");
  }
</script>

{#if !advisor}
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="text-center">
        <h1 class="text-2xl font-bold mb-4">Advisor not found</h1>
        <Button>
          <a href="/browse">
            <ArrowLeft class="mr-2 h-4 w-4" />
            <span>Back to Browse</span>
          </a>
        </Button>
      </div>
    </main>
  </div>
{:else}
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <div class="container mx-auto px-4 py-8">
        <Button variant="ghost" class="mb-6">
          <a href="/browse" class="flex flex-row items-center">
            <ArrowLeft class="mr-2 h-4 w-4" />
            <span>Back to Browse</span>
          </a>
        </Button>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-2">
            <div class="bg-card rounded-lg p-6 shadow-sm border mb-6">
              <div class="flex items-start justify-between mb-6">
                <div class="flex items-center gap-4">
                  <Avatar class="h-24 w-24">
                    <AvatarImage src={advisor.image} alt={advisor.name} />
                    <AvatarFallback
                      >{advisor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}</AvatarFallback
                    >
                  </Avatar>
                  <div>
                    <h1 class="text-2xl font-bold mb-1">{advisor.name}</h1>
                    <p class="text-muted-foreground mb-2">{advisor.title}</p>
                    <div class="flex items-center gap-2 text-muted-foreground">
                      <MapPin class="h-4 w-4" />
                      <span
                        >{advisor.location.city}, {advisor.location.state}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center gap-1 px-3 py-1.5 bg-muted rounded-full"
                >
                  <Star class="h-4 w-4 fill-tribe-500 text-tribe-500" />
                  <span class="font-medium">{advisor.rating}</span>
                  <span class="text-sm text-muted-foreground"
                    >({advisor.reviews})</span
                  >
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                {#each advisor.categories as category}
                  <Badge variant="secondary">
                    {categories.get(category || 0)}
                  </Badge>
                {/each}
              </div>
              <div class="prose max-w-none">
                <h2 class="text-xl font-semibold mb-3">About</h2>
                <p class="text-muted-foreground leading-relaxed mb-6">
                  {advisor.bio}
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <Card>
              <CardContent class="p-6">
                <h2 class="text-xl font-semibold mb-4">
                  Availability & Pricing
                </h2>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <Clock class="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p class="font-medium">Status</p>
                      <p
                        class={advisor.availability === -1 // unlimited availablity
                          ? "text-teal-600"
                          : advisor.availability === 0 // waitlist (not available)
                            ? "text-tribe-500"
                            : "text-amber-500"}
                      >
                        {advisor.availability}
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <CalendarDays
                      class="h-5 w-5 text-muted-foreground mt-0.5"
                    />
                    <div>
                      <p class="font-medium">Price</p>
                      <p class={advisor.price === 0 ? "text-teal-600" : ""}>
                        {advisor.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <Button class="w-full" onclick={handleAddAdvisor}>
                    {#if advisor.availability === 0}
                      <span>Join Waitlist</span>
                    {:else}
                      <span class="flex items-center">
                        <Plus class="mr-2 h-4 w-4" /> Add to My Tribe
                      </span>
                    {/if}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent class="p-6">
                <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
                <div class="space-y-3">
                  <Button variant="outline" class="w-full justify-start">
                    <MessageSquare class="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button variant="outline" class="w-full justify-start">
                    <CalendarDays class="mr-2 h-4 w-4" />
                    Schedule Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  </div>
{/if}
