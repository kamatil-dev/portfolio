<template>
  <header class="relative w-full headerHeight overflow-hidden flex items-top">
    <div class="absolute w-full h-full">
      <!-- previously set width 1600 height 1200 -->
      <img
        src="/wide-laptop-gradient-bg.webp"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 80vw, (max-width: 1439px) 100vw"
        srcset="
          /wide-laptop-gradient-bg-min.webp  768w,
          /wide-laptop-gradient-bg.webp     1024w
        "
        alt="laptop with black background"
        class="w-full h-full object-cover object-top"
      />
    </div>
    <div
      class="relative w-full text-center px-1 md:px-16 lg:px-28 xl:px-40 pt-5 2xl:pt-10 headerFont text-4xl md:text-6xl 2xl:text-7xl font-bold"
    >
      <div>
        <MyTransition>
          <h1 v-if="!loading" class="text-white flex justify-center">
            {{ $t("sections.hero.content.1") }}
            <span>
              <IconHi class="ml-3 p-1" />
            </span>
          </h1>
        </MyTransition>
        <MyTransition :delay="Number(1.3)">
          <h1 v-if="!loading" class="mt-1 tracking-wide text-white">
            {{ $t("sections.hero.content.2") }}
          </h1>
        </MyTransition>
      </div>
      <div class="mt-2">
        <MyTransition :delay="Number(1.6)">
          <h1 v-if="!loading" class="tracking-wide text-white">
            {{ $t("sections.hero.content.3") }}
          </h1>
        </MyTransition>
        <MyTransition :delay="Number(1.9)">
          <h1 v-if="!loading" class="py-2 tracking-wide text-white">
            {{ $t("sections.hero.content.4") }}
          </h1>
        </MyTransition>
      </div>
    </div>
  </header>
</template>
<script setup>
let loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>
<style scoped>
.headerHeight {
  height: calc(100vh - 30px);
}
</style>
