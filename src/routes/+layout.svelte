<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { Toaster } from "svelte-5-french-toast";
  import "../app.css";
  let { children } = $props();
</script>

<Navbar />
<Toaster />
{@render children()}
<Footer />
