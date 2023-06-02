<template>
  <div
    id="contact"
    class="bg-white contactSectionHeight px-10 pt-24 pb-24 md:pt-16 flex items-center justify-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl xl:max-w-3xl">
      <div
        class="flex flex-col mb-16 sm:text-center sm:mb-0 subFontFamily tracking-wide"
      >
        <div class="mb-6 sm:mx-auto">
          <div
            class="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-50"
          >
            <UserIcon class="w-9 h-9 lg:w-10 lg:h-10" />
          </div>
        </div>
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl xl:max-w-3xl md:mb-12"
        >
          <h3
            class="max-w-lg lg:max-w-3xl mb-6 text-3xl font-extrabold leading-none text-gray-900 sm:text-5xl lg:text-6xl md:mx-auto"
          >
            {{ $t("sections.contact.title") }}
          </h3>
          <p
            class="text-base text-gray-600 md:text-lg xl:text-xl"
            style="word-spacing: 5px"
          >
            {{ $t("sections.contact.content") }}
          </p>
        </div>
        <div
          class="md:space-x-3 space-y-3 md:space-y-0 rtl:space-x-reverse flex flex-col md:flex-row justify-center"
        >
          <a
            href="mailto:karim.amahtil@gmail.com"
            class="inline-flex items-center justify-center h-12 px-6 text-lg text-white font-medium bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 transition duration-200 rounded shadow-md hover:shadow-gray-400 focus:shadow-outline focus:outline-none"
          >
            <EnvelopeIcon class="w-5 h-5 rtl:ml-2 ltr:mr-2" />
            {{ $t("sections.contact.buttons.email") }}
          </a>
          <a
            href="https://wa.me/212624884933"
            class="inline-flex items-center justify-center h-12 px-6 text-lg text-white font-medium bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 transition duration-200 rounded shadow-md hover:shadow-gray-400 focus:shadow-outline focus:outline-none"
          >
            <PhoneIcon class="w-5 h-5 rtl:ml-2 ltr:mr-2" />
            {{ $t("sections.contact.buttons.phone") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped>
.contactSectionHeight {
  height: auto;
}

@media (min-width: 768px) {
  .contactSectionHeight {
    height: calc(100vh - 173px);
  }
}
</style>
