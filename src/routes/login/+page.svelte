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
  //import { goto } from "$app/navigation";
  //import toast from "svelte-5-french-toast";
  //import { supabase } from "$lib/integrations/supabase/client";
  import GoogleLoginButton from "$lib/components/auth/GoogleLoginButton.svelte";
  import { Eye, EyeOff, Mail, Lock } from "@lucide/svelte";

  let email = $state("");
  let password = $state("");
  let showPassword = $state(false);
  let isLoading = $state(false);

  async function handleLogin() {
    console.log("handle login");
    /*
    isLoading = true;

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Successfully logged in!");
        goto("/dashboard");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      isLoading = false;
    }
      */
  }
</script>

<div class="min-h-screen flex items-center justify-center p-4">
  <Card class="w-full max-w-md">
    <CardHeader class="text-center">
      <CardTitle class="text-2xl font-bold">Welcome back</CardTitle>
      <CardDescription>Sign in to your account to continue</CardDescription>
    </CardHeader>
    <CardContent>
      <form onsubmit={handleLogin} class="space-y-4">
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
              placeholder="Enter your password"
              bind:value={password}
              required
              class="pl-10"
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
        <Button
          type="submit"
          class="w-full bg-tribe-600 hover:bg-tribe-700"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
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
        Don't have an account?{" "}
        <a
          href="/signup"
          class="underline underline-offset-4 hover:text-primary"
        >
          Sign up
        </a>
      </p>
    </CardFooter>
  </Card>
</div>
