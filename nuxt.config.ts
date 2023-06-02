export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Web developer portfolio | FullStack Developer",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Personal Portfolio Website. I'm a Front-End Web Developer. Currently focused on developing website using Vue. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "Karim Amahtil" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, FullStack, Sinior Web Developer, Software Developer, Software Engineer, Self Taught, KARIM AMAHTIL, KAMATIL",
        },
        {
          property: "og:site_name",
          content: "Web developer portfolio | FullStack Developer",
        },
        {
          property: "og:site",
          content: "https://kamatil.com/",
        },
        {
          property: "og:title",
          content: "Web developer portfolio | FullStack Developer",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. I'm a FullStack Web Developer. Currently focused on developing website using Vue 3. Checkout my projects and github repositories", // todo need to update the description
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "/favicon-wb.png", ///favicon-wb.png
        },
      ],
      link: [{ rel: "icon", href: "/favicon-wb.png" }],
    },
  },
  runtimeConfig: {
    public: {
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nodejs",
        "PHP 8.1",
        "Wordpress",
        "Shopify",
        "Woocommerce",
        "Vue 2&3",
        "Vuetify",
        "Nuxt 2&3",
        "TypeScript",
        "Tailwind",
        "Bootstrap",
        "SASS",
        "Elementor",
        "Three.js",
        "Git",
      ],
      projects: [
        {
          title: "Kesan",
          titleColor: "text-white",
          filterColor: "bg-yellow-400 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "PHP", "From Scratch"],
          urlLink: "https://kesan.org",
        },
        {
          title: "Wezlie",
          titleColor: "text-white",
          filterColor: "bg-yellow-400 bg-opacity-40",
          description: null,
          techStack: ["Shopify"],
          urlLink: "https://wezlie.com",
        },
        {
          title: "Dietitian",
          titleColor: "text-white",
          filterColor: "bg-green-400 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "PHP", "Landing Page"],
          urlLink: "https://dietitian.sa",
        },
        {
          title: "Wezlie Partners",
          titleColor: "text-white",
          filterColor: "bg-yellow-400 bg-opacity-40",
          description: null,
          techStack: ["Shopify apps", "Vue", "Vuetify", "Nuxt 2"],
          urlLink: "https://wezliepartner.com",
        },
        {
          title: "EP-Optique",
          titleColor: "text-white",
          filterColor: "bg-gray-800 bg-opacity-40",
          description: null,
          techStack: ["Shopify"],
          urlLink: "https://epoptique.ma",
        },
        {
          title: "Orlina",
          titleColor: "text-white",
          filterColor: "bg-blue-600 bg-opacity-40",
          description: null,
          techStack: ["Shopify"],
          urlLink: "https://orlinaqa.com/",
        },
        {
          title: "Obaha",
          titleColor: "text-white",
          filterColor: "bg-amber-800 bg-opacity-40",
          description: null,
          techStack: ["Shopify"],
          urlLink: "https://www.obaha.com.sa",
        },
        {
          title: "Igzozt",
          titleColor: "text-white",
          filterColor: "bg-red-600 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "PHP", "Elementor"],
          urlLink: "https://igzozt.com",
        },
        {
          title: "S-Kingdom",
          titleColor: "text-white",
          filterColor: "bg-pink-500 bg-opacity-40",
          description: null,
          techStack: ["Shopify"],
          urlLink: "https://s-kingdom.net",
        },
        {
          title: "Adore",
          titleColor: "text-white",
          filterColor: "bg-red-800 bg-opacity-40",
          description: null,
          techStack: ["Shopify"],
          urlLink: "https://www.adoreofficial.co",
        },
        {
          title: "MiniUni",
          titleColor: "text-white",
          filterColor: "bg-indigo-800 bg-opacity-40",
          description: null,
          techStack: ["PHP", "PWA", "Javascript"],
          urlLink: "http://miniuni.kamatil.com",
        },
        {
          title: "Arabic Shipping",
          titleColor: "text-white",
          filterColor: "bg-orange-500 bg-opacity-40",
          description: null,
          techStack: ["Shopify apps", "Vue", "Tailwind", "Nuxt 3"],
          urlLink: "https://arabic-shipping.kamatil.com",
        },
        {
          title: "Dark Mode Extension",
          titleColor: "text-white",
          filterColor: "bg-yellow-600 bg-opacity-40",
          description: null,
          techStack: ["Javascript", "Chrome"],
          urlLink:
            "https://chrome.google.com/webstore/detail/all-in-one-dark-mode/okcnoljhblabaagenlfpgknndajmmilm",
        },
        {
          title: "ClipBoard History",
          titleColor: "text-white",
          filterColor: "bg-orange-500 bg-opacity-40",
          description: null,
          techStack: ["Javascript", "Chrome"],
          urlLink:
            "https://chrome.google.com/webstore/detail/kamatil-clipboard-history/fihflbhnbgdoplbkojjpbjjhkedmhkgb",
        },
        {
          title: "Educarso Accessibility",
          titleColor: "text-white",
          filterColor: "bg-sky-400 bg-opacity-40",
          description: null,
          techStack: ["Javascript", "Chrome"],
          urlLink:
            "https://chrome.google.com/webstore/detail/educarso-accessibility/lgjgpghombafkhffiejjofmfchonbpli",
        },
        {
          title: "Kesan Abroad",
          titleColor: "text-white",
          filterColor: "bg-blue-700 bg-opacity-40",
          description: null,
          techStack: ["Javascript", "Landing Page"],
          urlLink: "https://www.kesan.org/about-kesan/",
        },
        {
          title: "Educarso",
          titleColor: "text-white",
          filterColor: "bg-sky-600 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "LMS", "PHP"],
          urlLink: "https://educarso.com",
        },
        {
          title: "Educarso Player",
          titleColor: "text-white",
          filterColor: "bg-sky-700 bg-opacity-40",
          description: null,
          techStack: ["PHP", "Three.js"],
          urlLink: "https://player.educarso.com",
        },
        {
          title: "Alwadeh",
          titleColor: "text-white",
          filterColor: "bg-blue-800 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "Woocommerce", "PHP"],
          urlLink: "https://alwadeh.com",
        },
        {
          title: "Al-Morshid",
          titleColor: "text-white",
          filterColor: "bg-blue-900 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "PHP"],
          urlLink: "https://www.al-morshid.net",
        },
        {
          title: "SmartElectroX",
          titleColor: "text-white",
          filterColor: "bg-orange-600 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "Woocommerce", "PHP"],
          urlLink: "https://smartelectrox.com",
        },
        {
          title: "Debo",
          titleColor: "text-white",
          filterColor: "bg-gray-900 bg-opacity-40",
          description: null,
          techStack: ["Shopify"],
          urlLink: "https://www.deboshop.com",
        },
        {
          title: "TvOnTheGo",
          titleColor: "text-white",
          filterColor: "bg-blue-700 bg-opacity-40",
          description: null,
          techStack: ["PHP", "Landing Page"],
          urlLink: "https://tvonthego.kamatil.com/",
        },
        {
          title: "IPTV Xtream",
          titleColor: "text-white",
          filterColor: "bg-red-700 bg-opacity-40",
          description: null,
          techStack: ["Wordpress", "PHP"],
          urlLink: "http://iptv-xtream.com/",
        },
      ],
      navigation: [
        {
          id: 1,
          name: "about",
          href: "/#about",
        },
        {
          id: 2,
          name: "skills",
          href: "/#skills",
        },
        {
          id: 3,
          name: "projects",
          href: "/#projects",
        },
        {
          id: 4,
          name: "contact",
          href: "/#contact",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});