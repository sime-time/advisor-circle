<script lang="ts">
  import AdvisorFilters from "$lib/components/advisor/AdvisorFilters.svelte";
  import AdvisorMobileFilters from "$lib/components/advisor/AdvisorMobileFilters.svelte";
  import AdvisorList from "$lib/components/advisor/AdvisorList.svelte";
  import { categories, advisors } from "$lib/data/advisorData";
  import { useAdvisorFiltering } from "$lib/hooks/useAdvisorFiltering";
  import toast from "svelte-5-french-toast";

  let addedAdvisors = $state<number[]>([]);
  let isMobileFilterOpen = $state(false);
  let searchParams = new URLSearchParams(window.location.search);

  let {
    searchQuery,
    setSearchQuery,
    locationQuery,
    setLocationQuery,
    selectedCategories,
    selectedPrice,
    setSelectedPrice,
    toggleCategory,
    clearFilters,
    filteredAdvisors,
  } = useAdvisorFiltering(advisors);

  function handleAddAdvisor(advisorId: number) {
    if (!addedAdvisors.includes(advisorId)) {
      addedAdvisors = [...addedAdvisors, advisorId];
      toast.success("Advisor added to your tribe!");
    }
  }
</script>

<div class="min-h-screen flex flex-col">
  <main class="flex-grow">
    <div class="bg-muted/30 py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-2">Browse Advisors</h1>
        <p class="text-muted-foreground">
          Find the perfect advisors to join your personal board and help you
          navigate life's challenges
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <AdvisorFilters
          {categories}
          {selectedCategories}
          {selectedPrice}
          {toggleCategory}
          {setSelectedPrice}
          {clearFilters}
          {locationQuery}
          {setLocationQuery}
        />

        <div class="flex-1">
          <AdvisorMobileFilters
            {categories}
            {selectedCategories}
            {selectedPrice}
            {searchQuery}
            {locationQuery}
            {isMobileFilterOpen}
            {toggleCategory}
            {setSelectedPrice}
            {setSearchQuery}
            {setLocationQuery}
            onToggleMobileFilters={() =>
              (isMobileFilterOpen = !isMobileFilterOpen)}
          />

          <AdvisorList
            {filteredAdvisors}
            {addedAdvisors}
            {handleAddAdvisor}
            {clearFilters}
          />
        </div>
      </div>
    </div>
  </main>
</div>
