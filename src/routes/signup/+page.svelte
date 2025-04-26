<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import toast from "svelte-5-french-toast";
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client";
  import GoogleLoginButton from "$lib/components/auth/GoogleLoginButton.svelte";
  import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    Lightbulb,
    GraduationCap,
    User,
  } from "@lucide/svelte";

  let name = $state("");
  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let showPassword = $state(false);
  let showConfirmPassword = $state(false);
  let isLoading = $state(false);
  let userType = $state("user");

  async function handleSignup(e: Event) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    isLoading = true;
    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (error) {
        toast.error(error.message || "Sign up error. Please try again.");
      } else {
        toast.success(
          "Account created successfully! Please check your email to confirm your account.",
        );
        goto("/login");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center p-4">
  <Card class="w-full max-w-md">
    <CardHeader class="text-center">
      <CardTitle class="text-2xl font-bold">Create an account</CardTitle>
      <CardDescription>
        Sign up to get started with Advisor Tribe
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form onsubmit={handleSignup} class="space-y-6">
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
        <div class="space-y-2">
          <Label for="name">Name</Label>
          <div class="relative">
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              bind:value={name}
              required
              class="pl-10"
            />
            <User
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5"
            />
          </div>
        </div>
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <div class="relative">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              bind:value={email}
              required
              class="pl-10"
            />
            <Mail
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5"
            />
          </div>
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <div class="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              bind:value={password}
              required
              class="pl-10"
              minlength={6}
            />
            <Lock
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5"
            />
            <button
              type="button"
              onclick={() => (showPassword = !showPassword)}
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {#if showPassword}
                <EyeOff class="h-5 w-5" />
              {:else}
                <Eye class="h-5 w-5" />
              {/if}
            </button>
          </div>
        </div>
        <div class="space-y-2">
          <Label for="confirmPassword">Confirm Password</Label>
          <div class="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              bind:value={confirmPassword}
              required
              class="pl-10"
              minlength={6}
            />
            <Lock
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5"
            />
            <button
              type="button"
              onclick={() => (showConfirmPassword = !showConfirmPassword)}
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {#if showConfirmPassword}
                <EyeOff class="h-5 w-5" />
              {:else}
                <Eye class="h-5 w-5" />
              {/if}
            </button>
          </div>
        </div>
        <Button
          type="submit"
          class="w-full bg-tribe-600 hover:bg-tribe-700"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-background px-2 text-muted-foreground"
            >or continue with</span
          >
        </div>
      </div>
      <GoogleLoginButton />
    </CardContent>
    <CardFooter class="flex flex-col space-y-2 text-center">
      <p class="text-sm text-muted-foreground">
        Already have an account?{" "}
        <a
          href="/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </a>
      </p>
    </CardFooter>
  </Card>
</div>
