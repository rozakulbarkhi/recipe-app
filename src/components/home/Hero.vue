<template>
  <div class="w-full h-dvh relative">
    <img
      src="../../assets/images/bg-hero.jpg"
      alt="hero image"
      class="h-full object-cover brightness-75"
    />

    <div class="absolute top-2/3 left-1/2 transform -translate-y-1/2">
      <img
        src="../../assets/images/food.png"
        alt="food image"
        class="object-cover w-full h-full"
      />
    </div>

    <div
      class="absolute top-1/2 right-1/2 left-44 transform -translate-y-1/2 space-y-8 text-gray-50"
    >
      <div class="relative">
        <h1 class="text-5xl font-bold">
          Discover
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600"
            >Delicious Recipes</span
          >
          Every Day
        </h1>

        <img
          src="../../assets/images/chef.png"
          alt="chef image"
          class="absolute top-0 -right-20 transform -translate-y-1/2 object-cover -z-20"
          height="240"
          width="240"
        />
      </div>

      <h3 class="antialiased text-xl max-w-lg">
        Looking to cook something special? Explore thousands of easy-to-follow,
        tasty recipes for every occasion. From everyday meals to special
        moments, we have the inspiration you need!
      </h3>

      <button
        type="button"
        class="capitalize py-2 px-6 bg-blue-900 hover:bg-blue-800 transform transition-colors duration-300 ease-in-out text-gray-50 rounded-md"
      >
        Find recipes
      </button>
    </div>
  </div>
</template>

<script setup></script>
