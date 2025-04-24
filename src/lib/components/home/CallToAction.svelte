<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<section
  class="py-16 px-4 bg-gradient-to-r from-council-purple to-council-blue text-white"
>
  <div class="container mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">
      Ready to Build Your Advisor Circle?
    </h2>
    <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
      Join thousands of professionals who are leveraging collective wisdom to
      make better decisions and achieve their goals.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/signup">
        <Button
          size="lg"
          class="bg-white text-council-purple hover:bg-gray-100 px-8"
        >
          Get Started for Free
        </Button>
      </a>
    </div>
  </div>
</section>
