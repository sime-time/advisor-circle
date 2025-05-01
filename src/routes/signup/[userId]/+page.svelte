<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { goto } from "$app/navigation";
  import toast from "svelte-5-french-toast";
  import {
    Lightbulb,
    GraduationCap,
    DollarSign,
    Contact,
    BookOpenText,
    MapPinned,
  } from "@lucide/svelte";

  interface Location {
    city: string;
    state: string;
    country: string;
  }

  let { data } = $props();
  let { userId, userName } = data;
  let userType = $state("advisor");
  let price = $state(0);
  let tagline = $state("");
  let bio = $state("");
  let location = $state<Location>({
    city: "",
    state: "",
    country: "",
  });
  let isLoading = $state(false);

  async function createNewAdvisor(e: Event) {
    e.preventDefault();
    isLoading = true;
    try {
      const response = await fetch("/api/new-advisor", {
        method: "POST",
        body: JSON.stringify({
          userId,
          price,
          tagline,
          bio,
          city: location.city,
          state: location.state,
          country: location.country,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (response) {
        toast.success("New advisor account created!");
        goto("/dashboard");
      }
    } catch (err) {
      console.error("Advisor creation failed:", err);
      toast.error("Error creating advisor account.");
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center p-4">
  <Card class="w-full max-w-md">
    <CardHeader class="text-center">
      <CardTitle class="text-2xl font-bold">Welcome, {userName}</CardTitle>
      <CardDescription>Set up your account</CardDescription>
    </CardHeader>
    <CardContent>
      <form class="space-y-6" onsubmit={createNewAdvisor}>
        <div class="space-y-4">
          <Label>I want to join as:</Label>
          <div class="grid grid-cols-2 gap-4">
            <Label
              class="flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all {userType ===
              'user'
                ? 'border-tribe-600 bg-tribe-500/5'
                : 'border-muted hover:border-tribe-600/50'}"
              onclick={() => (userType = "user")}
            >
              <Lightbulb class="h-8 w-8 mb-2" />
              <div class="font-medium">Learner</div>
              <p class="text-sm text-muted-foreground text-center mt-1">
                I want guidance
              </p>
            </Label>
            <Label
              class="flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all {userType ===
              'advisor'
                ? 'border-tribe-600 bg-tribe-500/5'
                : 'border-muted hover:border-tribe-600/50'}"
              onclick={() => (userType = "advisor")}
            >
              <GraduationCap class="h-8 w-8 mb-2" />
              <div class="font-medium">Advisor</div>
              <p class="text-sm text-muted-foreground text-center mt-1">
                I want to mentor others
              </p>
            </Label>
          </div>
        </div>

        {#if userType === "advisor"}
          <div class="space-y-2">
            <Label for="tagline">Tagline</Label>
            <div class="relative">
              <Input
                id="tagline"
                name="tagline"
                type="text"
                bind:value={tagline}
                placeholder="Biotech Executive & Researcher"
                required
                class="pl-10"
              />
              <Contact
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5"
              />
            </div>
          </div>

          <div class="space-y-2">
            <Label for="bio">Bio</Label>
            <div class="relative">
              <Textarea
                id="bio"
                name="bio"
                bind:value={bio}
                placeholder="20+ years in pharmaceutical research and biotech leadership. Passionate about mentoring young scientists and career transitions."
                required
                class="pl-10"
              />
              <BookOpenText
                class="absolute left-3 top-3 text-gray-500 h-5 w-5"
              />
            </div>
          </div>

          <div class="space-y-2">
            <Label for="location">Location</Label>
            <div class="space-y-3">
              <Input
                id="city"
                name="city"
                type="text"
                bind:value={location.city}
                placeholder="City"
                required
              />
              <Input
                id="state"
                name="state"
                type="text"
                bind:value={location.state}
                placeholder="State"
                required
              />
              <Input
                id="country"
                name="country"
                type="text"
                bind:value={location.country}
                placeholder="Country"
                required
              />
            </div>
          </div>
        {/if}

        <Button
          type="submit"
          class="w-full bg-tribe-600 hover:bg-tribe-700"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Continue"}
        </Button>
      </form>
    </CardContent>
  </Card>
</div>
