<template>
  <div
    id="about"
    class="bg-whitemd:w-10/12 lg:w-10/12 xl:w-9/12 pt-16 md:py-20 lg:pt-24 mx-auto"
  >
    <div class="container px-6 py-8 mx-auto">
      <div class="items-center lg:flex lg:space-x-6 rtl:space-x-reverse">
        <div class="lg:w-8/12 xl:w-9/12 subFontFamily leftText">
          <h2 class="text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
            {{ $t("sections.about.title") }}
          </h2>
          <div
            class="text-gray-600 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl space-y-4"
            v-html="$t('sections.about.content')"
          ></div>

          <div class="flex items-center mt-6 -mx-2">
            <a
              class="mx-2"
              href="https://www.instagram.com/amahtil.kamatil"
              aria-label="Instagram"
              target="blank"
            >
              <IconInstagram class="IconInProfile" />
            </a>

            <a
              class="mx-2"
              href="https://www.facebook.com/amahtil.kamatil"
              aria-label="Facebook"
              target="blank"
            >
              <IconFacebook class="IconInProfile" />
            </a>
          </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-4/12 xl:w-4/12">
          <div class="flex items-center justify-center lg:justify-end">
            <div
              class="profileImgContainer relative max-w-xs lg:max-w-xxs xl:max-w-md bg-gradient-to-br hover:bg-gradient-to-tr from-orange-400 hover:from-orange-600 via-orange-500 hover:via-orange-500 to-orange-600 hover:to-orange-400 p-1.5 rounded-full shadow-md shadow-gray-300"
            >
              <img
                class="bg-white p-1.5 object-cover object-top rounded-full"
                src="/profile.webp"
                width="350"
                height="350"
                alt="profile image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".leftText",
      start: "top center",
      end: "top center",
      // markers: true,
      // toggleActions: "restart pause reverse pause",
      // scrub: 1, // scrub is use set the amount of time to catch up, it kinda looks the scroll animation with ur scroller
    },
  });
  tl.addLabel("start")
    .from(".leftText", { opacity: 0, translateX: "-300px" })
    .addLabel("entering")
    .to(".leftText", { opacity: 1, translateX: "0px", duration: 1 })
    .addLabel("end");

  let imgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".profileImgContainer",
      start: "-200px center",
      end: "top center",
      // markers: true,
    },
  });
  imgTl
    .addLabel("start")
    .from(".profileImgContainer", { opacity: 0, scale: 0.5 })
    .addLabel("entering")
    .to(".profileImgContainer", { opacity: 1, scale: 1, duration: 1 })
    .addLabel("end");
});
</script>
