<script lang="ts">
  import { Card, CardContent } from "$lib/components/ui/card";
  import {
    Briefcase,
    Stethoscope,
    BookOpen,
    CircleDollarSign,
    Dumbbell,
    Code,
    PenTool,
    User,
    Building,
    AtomIcon,
  } from "@lucide/svelte";

  const categories = [
    {
      name: "Business",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Healthcare",
      icon: Stethoscope,
      color: "bg-red-100 text-red-800",
    },
    {
      name: "Education",
      icon: BookOpen,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "Finance",
      icon: CircleDollarSign,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Fitness",
      icon: Dumbbell,
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Technology",
      icon: Code,
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      name: "Arts",
      icon: PenTool,
      color: "bg-pink-100 text-pink-800",
    },
    {
      name: "Personal Development",
      icon: User,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Real Estate",
      icon: Building,
      color: "bg-teal-100 text-teal-800",
    },
    {
      name: "Science",
      icon: AtomIcon,
      color: "bg-cyan-100 text-cyan-800",
    },
  ];
</script>

<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-2">Browse by Category</h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Find advisors in specific fields who can provide targeted guidance based
        on your needs.
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {#each categories as category}
        <a href="/categories/{category.name.toLowerCase()}">
          <Card
            class="h-full transition-all hover:scale-105 hover:shadow-md cursor-pointer border-gray-200 dark:border-gray-800"
          >
            <CardContent class="p-5 flex flex-col items-center text-center">
              <div
                class="w-12 h-12 rounded-full {category.color} flex items-center justify-center mb-3"
              >
                <svelte:component this={category.icon} size={24} />
              </div>
              <h3 class="font-medium text-sm sm:text-base mb-1">
                {category.name}
              </h3>
            </CardContent>
          </Card>
        </a>
      {/each}
    </div>
  </div>
</section>
