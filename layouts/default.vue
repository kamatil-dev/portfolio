<template>
  <div :dir="CurrentLocale === 'ar' ? 'rtl' : 'ltr'">
    <nav
      id="navBar"
      class="z-30 navPadding flex items-center justify-between sticky top-0 w-full shadow"
      :class="navBgTextColor"
      style="height: 70px"
    >
      <div>
        <Transition appear name="fadeIn">
          <button
            v-if="!loading"
            type="button"
            class="flex items-center text-2xl font-bold cursor-pointer"
            aria-label="Website Logo"
            @click="goToHome"
          >
            <img
              :src="logo"
              width="40"
              height="40"
              alt="favicon"
              class="w-10 h-10 rounded-lg"
            />
            <p
              class="hidden lg:block text-3xl font-bold ltr:ml-2 rtl:mr-2 logoFont"
            >
              {{ CurrentLocale !== "ar" ? "AMATIL." : $t("app_name") }}
            </p>
          </button>
        </Transition>
      </div>
      <div
        v-if="!loading"
        class="hidden lg:flex font-medium space-x-5 rtl:space-x-reverse lg:space-x-8 xl:space-x-10"
      >
        <TransitionGroup appear @before-enter="before" @enter="entering">
          <a
            v-for="(item, index) in navigation"
            :key="item.id"
            :data-index="index"
            :href="item.href"
            class="text-lg lg:text-lg xl:text-xl headerFont underAnimation"
            >{{ $t(`menu.${item.name}`) }}</a
          >
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                :class="navBgTextColor"
                class="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <LanguageIcon :class="navBgTextColor" class="w-5 h-5" />
                <ChevronDownIcon
                  class="ltr:ml-2 ltr:-mr-1 rtl:mr-2 rtl:-ml-1 h-5 w-5 text-orange-500 hover:text-orange-300"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute space-y-2 p-2 headerFont ltr:right-0 rtl:left-0 mt-2 w-56 ltr:origin-top-right rtl:origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <button
                    @click="$setLocale('ar'), (CurrentLocale = 'ar')"
                    :class="[
                      active ? 'bg-orange-400 text-white' : 'text-gray-900',
                      CurrentLocale === 'ar'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <svg
                      class="rtl:ml-2 ltr:mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-ma"
                      viewBox="0 0 640 480"
                    >
                      <path fill="#c1272d" d="M640 0H0v480h640z" />
                      <path
                        fill="none"
                        stroke="#006233"
                        stroke-width="11.7"
                        d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
                      />
                    </svg>
                    {{ $t("locales.ar") }}
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    @click="$setLocale('en'), (CurrentLocale = 'en')"
                    :class="[
                      active ? 'bg-orange-400 text-white' : 'text-gray-900',
                      CurrentLocale === 'en'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <svg
                      class="rtl:ml-2 ltr:mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-us"
                      viewBox="0 0 640 480"
                    >
                      <g fill-rule="evenodd">
                        <g stroke-width="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z"
                            transform="scale(.9375)"
                          />
                          <path
                            fill="#fff"
                            d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z"
                            transform="scale(.9375)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h389.1v275.7H0z"
                          transform="scale(.9375)"
                        />
                        <path
                          fill="#fff"
                          d="M32.4 11.8 36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9 36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0 3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0 3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0 3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1 36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0 3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z"
                          transform="scale(.9375)"
                        />
                      </g>
                    </svg>
                    {{ $t("locales.en") }}
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    @click="$setLocale('fr'), (CurrentLocale = 'fr')"
                    :class="[
                      active ? 'bg-orange-400 text-white' : 'text-gray-900',
                      CurrentLocale === 'fr'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <svg
                      class="rtl:ml-2 ltr:mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-fr"
                      viewBox="0 0 640 480"
                    >
                      <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h640v480H0z" />
                        <path fill="#002654" d="M0 0h213.3v480H0z" />
                        <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
                      </g>
                    </svg>
                    {{ $t("locales.fr") }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </TransitionGroup>
      </div>
      <Menu as="div" class="lg:hidden">
        <div class="flex items-center">
          <MenuButton aria-label="Menu">
            <Bars3Icon class="w-8 h-8" />
          </MenuButton>
        </div>
        <Transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute ltr:right-0 rtl:left-0 w-64 mt-5 rtl:ml-8 ltr:mr-8 ltr:md:mr-10 rtl:md:ml-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="p-1 space-y-2">
              <MenuItem
                v-for="item in navigation"
                :key="item"
                v-slot="{ active }"
              >
                <a
                  :href="item.href"
                  :class="[
                    active ? 'bg-gray-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-4 py-3 font-medium headerFont text-lg',
                  ]"
                >
                  {{ $t(`menu.${item.name}`) }}
                </a>
              </MenuItem>
              <MenuItem class="mb-2 border-b-2">
                <span
                  class="flex w-full justify-center rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-600 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75"
                >
                  <LanguageIcon class="w-5 h-5" />
                </span>
              </MenuItem>
              <div class="space-y-2 p-2 headerFont">
                <MenuItem v-slot="{ active }">
                  <button
                    @click="$setLocale('ar'), (CurrentLocale = 'ar')"
                    :class="[
                      active ? 'bg-orange-400 text-white' : 'text-gray-900',
                      CurrentLocale === 'ar'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <svg
                      class="rtl:ml-2 ltr:mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-ma"
                      viewBox="0 0 640 480"
                    >
                      <path fill="#c1272d" d="M640 0H0v480h640z" />
                      <path
                        fill="none"
                        stroke="#006233"
                        stroke-width="11.7"
                        d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
                      />
                    </svg>
                    {{ $t("locales.ar") }}
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    @click="$setLocale('en'), (CurrentLocale = 'en')"
                    :class="[
                      active ? 'bg-orange-400 text-white' : 'text-gray-900',
                      CurrentLocale === 'en'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <svg
                      class="rtl:ml-2 ltr:mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-us"
                      viewBox="0 0 640 480"
                    >
                      <g fill-rule="evenodd">
                        <g stroke-width="1pt">
                          <path
                            fill="#bd3d44"
                            d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z"
                            transform="scale(.9375)"
                          />
                          <path
                            fill="#fff"
                            d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z"
                            transform="scale(.9375)"
                          />
                        </g>
                        <path
                          fill="#192f5d"
                          d="M0 0h389.1v275.7H0z"
                          transform="scale(.9375)"
                        />
                        <path
                          fill="#fff"
                          d="M32.4 11.8 36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9 36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0 3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0 3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0 3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1 36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0 3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0 3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0 3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0 3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0 3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0 3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0 3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z"
                          transform="scale(.9375)"
                        />
                      </g>
                    </svg>
                    {{ $t("locales.en") }}
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    @click="$setLocale('fr'), (CurrentLocale = 'fr')"
                    :class="[
                      active ? 'bg-orange-400 text-white' : 'text-gray-900',
                      CurrentLocale === 'fr'
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-900',
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]"
                  >
                    <svg
                      class="rtl:ml-2 ltr:mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-fr"
                      viewBox="0 0 640 480"
                    >
                      <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h640v480H0z" />
                        <path fill="#002654" d="M0 0h213.3v480H0z" />
                        <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
                      </g>
                    </svg>
                    {{ $t("locales.fr") }}
                  </button>
                </MenuItem>
              </div>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </nav>
    <slot />
    <ContactMe />
    <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex flex-col items-center border-t pt-6">
        <!-- nav - start -->
        <nav
          class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4 headerFont"
        >
          <a
            v-for="item in navigation"
            :key="item"
            :href="item.href"
            class="footerBtn"
            >{{ $t("menu." + item.name) }}</a
          >
        </nav>
        <!-- nav - end -->

        <!-- social - start -->
        <div class="flex gap-4">
          <a
            href="https://www.instagram.com/amahtil.karim"
            aria-label="Instagram"
            target="_blank"
            class="footerIcon"
          >
            <IconInstagram class="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/212624884933"
            aria-label="Whatsapp"
            target="_blank"
            class="footerIcon"
          >
            <IconWhatsapp class="w-6 h-6" />
          </a>

          <a
            href="https://www.facebook.com/amahtil.karim"
            aria-label="Facebook"
            target="_blank"
            class="footerIcon"
          >
            <IconFacebook class="w-6 h-6" />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="text-gray-500 text-sm text-center py-8 headerFont">
        {{ $t("sections.footer.copyright") }}
      </div>
    </footer>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  Bars3Icon,
  LanguageIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
import { gsap } from "gsap";
import blackWhiteFavicon from "/favicon-bw.png";
import whiteBlackFavicon from "/favicon-wb.png";

let loading = ref(true);
const { $CurrentLocale } = useNuxtApp();
const CurrentLocale = ref($CurrentLocale);
const route = useRoute();
const { trackNavBarPosition, currentOffsetHeight } = trackNavBar();
const screenHeight = ref(0);
const heightOfNav = ref(0);
const currentScreenWidth = ref(0);
const navBgTextColor = ref("bg-black text-white");
const logo = ref(whiteBlackFavicon);
const navigation = useRuntimeConfig().public.navigation;
const trackScroll = () => {
  trackNavBarPosition("navBar");
};
const goToHome = () => {
  if (route.path !== "/") window.location.href = "/";
  else window.scrollTo(0, 0);
};

// animation
const before = (el) => {
  gsap.set(el, {
    opacity: 0,
  });
};
const entering = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    // duration: 1.0,
    duration: 0.8,
    delay: el.dataset.index * 0.2,
    onComplete: done,
  });
};
watchEffect(() => {
  if (
    currentOffsetHeight.value >
    screenHeight.value - heightOfNav.value * 2.5
  ) {
    // navbar style change on desktop view
    navBgTextColor.value = "bg-white text-black";
    logo.value = blackWhiteFavicon;
  } else {
    navBgTextColor.value = "bg-black text-white";
    logo.value = whiteBlackFavicon;
  }
});
onMounted(() => {
  // track nav bar position on initial render
  trackScroll();
  // use scroll event to update the current position of nav bar
  window.addEventListener("scroll", trackScroll);
  screenHeight.value = screen.height;
  heightOfNav.value = document.getElementById("navBar").offsetHeight;
  currentScreenWidth.value = screen.width;
  // console.log(currentScreenWidth.value);
  loading.value = false;
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Raleway:wght@100;200;300;400;500;600;700;800&family=Carter+One&family=Cairo&family=Montserrat:wght@400;500;600;700;800&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

[dir="rtl"] .subFontFamily,
[dir="rtl"] .headerFont,
[dir="rtl"] .logoFont {
  font-family: "Cairo", sans-serif;
}

[dir="ltr"] .subFontFamily {
  font-family: "Raleway", sans-serif;
}

[dir="ltr"] .headerFont {
  font-family: "Montserrat", sans-serif;
}

[dir="ltr"].logoFont {
  font-family: "Carter One", cursive;
}

.navPadding {
  padding: 15px 30px;
}

@media (min-width: 768px) {
  .navPadding {
    padding: 15px 50px;
  }
}

@media (min-width: 1024px) {
  .navPadding {
    padding: 15px 108px;
  }
}

@media (min-width: 1440px) {
  .navPadding {
    padding: 15px 160px;
  }
}

@media (min-width: 1536px) {
  .navPadding {
    padding: 15px 200px;
  }
}

@media (min-width: 1660px) {
  .navPadding {
    padding: 15px 260px;
  }
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #000000;
  border-radius: 5px;
  opacity: 0.2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

body {
  background-color: #f8f9fa;
}

html {
  scroll-behavior: smooth;
}

.bgLight {
  background-color: #f8f9fa;
}

.subTitle {
  @apply text-3xl lg:text-4xl text-center font-bold text-gray-800;
}

.projectCardContainer {
  @apply relative w-full h-full min-h-project-card rounded-lg border-gray-200 overflow-hidden shadow-md shadow-gray-400 hover:shadow-xl hover:shadow-gray-500 transition ease-out duration-300;
}

.projectTextContainer {
  @apply z-20 absolute inset-0 px-3 md:px-6 py-2 xl:py-4 w-full h-full flex flex-col justify-between bg-gray-900 bg-opacity-95 text-white;
}

.hobbyCardContainer {
  @apply bg-cover bg-top w-auto md:w-96 h-56 xl:w-[550px] xl:h-[300px] rounded-md overflow-hidden shadow-md hover:shadow-2xl hover:ring hover:ring-zinc-200 transition ease-linear duration-300;
}

.skillStyle {
  @apply border-b-2 border-l-2 border-r-2 border-gray-50 rounded-md font-semibold md:text-xl py-2 px-4 shadow-lg mx-2 mt-4 lg:mt-0 lg:mb-4 2xl:mb-6 ease-out duration-200 transform hover:-translate-y-2;
}

.footerBtn {
  @apply text-gray-500 hover:text-black active:text-black transition duration-100;
}

.footerIcon {
  @apply text-gray-500 hover:text-gray-500 active:text-gray-600 transition duration-100;
}

.IconInProfile {
  @apply w-5 h-5 xl:w-6 xl:h-6 text-gray-700 fill-current hover:text-gray-600;
}

.underAnimation {
  position: relative;
}
.underAnimation::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ff9800; /* #3cefff */
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.underAnimation:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
.fadeIn-enter-active {
  animation: fadeIn 0.4s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
