<script>
  import { Twitter, Linkedin, Instagram } from "@lucide/svelte";
  const currentYear = new Date().getFullYear();
</script>

<footer
  class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
      <div class="col-span-2">
        <a href="/" class="flex items-center gap-2 mb-4">
          <div
            class="h-8 w-8 rounded-full bg-gradient-to-r from-council-purple to-council-blue flex items-center justify-center"
          >
            <span class="text-white font-bold">AC</span>
          </div>
          <span class="font-bold text-xl">Advisor Circle</span>
        </a>
        <p class="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
          Build your personal board of advisors to navigate life's challenges
          and opportunities with expert guidance.
        </p>
        <div class="flex space-x-4">
          <a
            href="#"
            aria-label="Twitter"
            class="text-gray-500 hover:text-council-purple"
          >
            <Twitter class="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            class="text-gray-500 hover:text-council-purple"
          >
            <Linkedin class="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            class="text-gray-500 hover:text-council-purple"
          >
            <Instagram class="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
          For Users
        </h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/explore"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Explore Advisors
            </a>
          </li>
          <li>
            <a
              href="/categories"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
          For Advisors
        </h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/become-advisor"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Join as Advisor
            </a>
          </li>
          <li>
            <a
              href="/advisor-resources"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="/advisor-faq"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Company
        </h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/about"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/contact"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              class="text-gray-600 dark:text-gray-400 hover:text-council-purple dark:hover:text-council-purple-light"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <p class="text-gray-500 dark:text-gray-400 text-sm text-center">
        &copy; {currentYear} AdvisorCouncil. All rights reserved.
      </p>
    </div>
  </div>
</footer>
