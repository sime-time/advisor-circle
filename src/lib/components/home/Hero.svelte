<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
</script>

<div class="relative overflow-hidden">
  <!-- Background elements -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div
      class="absolute top-20 left-[10%] h-72 w-72 rounded-full bg-council-purple-light opacity-10 blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-[10%] h-96 w-96 rounded-full bg-council-blue opacity-10 blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto px-4 py-20 md:py-28">
    <div class="max-w-3xl mx-auto text-center">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-council-purple to-council-blue bg-clip-text text-transparent"
      >
        Build Your Personal Board of Advisors
      </h1>

      <p
        class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Connect with mentors, experts, and coaches across various fields to
        create your personal council of trusted advisors who can help guide your
        decisions.
      </p>

      <div class="flex flex-row gap-4 justify-center">
        <a href="/browse">
          <Button
            class="bg-council-purple hover:bg-council-purple-dark text-white px-4 py-3 h-auto text-lg"
          >
            Find Advisors
          </Button>
        </a>

        <div>
          <Button
            variant="outline"
            class="border-council-purple text-council-purple hover:text-council-purple-dark px-4 py-3 h-auto text-lg"
            onclick={scrollToHowItWorks}
          >
            How It Works
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>
