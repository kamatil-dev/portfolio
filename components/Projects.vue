<template>
  <div id="projects" class="pt-28 pb-20 px-4 lg:px-0 text-center space-y-14">
    <h3 class="subTitle mb-10 subFontFamily projectTitle">
      {{ $t("sections.projects.title") }}
    </h3>
    <div
      class="px-4 md:px-0 md:w-8/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto"
    >
      <CardProject
        v-for="project in projects.slice(0, 4)"
        :key="project"
        :project-details="project"
        :is-reverse="project.isReverse"
      />
    </div>
    <NuxtLink
      type="button"
      to="projects"
      class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500 focus:z-10 focus:ring-4 focus:ring-orange-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <PlusIcon class="h-5 w-5" />
    </NuxtLink>
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlusIcon } from "@heroicons/vue/20/solid";
gsap.registerPlugin(ScrollTrigger);
const projects = useRuntimeConfig().public.projects,
  props = defineProps({
    animations: {
      type: Boolean,
      default: true,
    },
  });
if (props.animations)
  onMounted(() => {
    let titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectTitle",
        start: "-100px center",
        end: "top center",
        // markers: true,
      },
    });
    titleTl
      .addLabel("start")
      .from(".projectTitle", { opacity: 0, translateX: "-100px" })
      .addLabel("entering")
      .to(".projectTitle", { opacity: 1, translateX: "0px", duration: 0.5 })
      .addLabel("end");

    gsap.set(".projectCardContainer", { opacity: 0, y: 20 });
    ScrollTrigger.batch(".projectCardContainer", {
      start: "-130px center",
      end: "top center",
      // markers: true,
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
    });
  });
</script>
