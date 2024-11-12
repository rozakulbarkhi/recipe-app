<template>
  <div class="flex gap-12">
    <div class="bg-gray-200 w-full h-[320px] animate-pulse rounded-lg flex-1" />
    <div class="flex-1 space-y-6">
      <div class="space-y-2">
        <div class="bg-gray-200 h-8 w-1/3 animate-pulse rounded-lg"></div>
        <div class="flex gap-2">
          <div
            v-for="n in 3"
            :key="n"
            class="bg-gray-200 h-6 w-20 rounded-lg"
          ></div>
        </div>
      </div>

      <div class="flex gap-2">
        <div
          v-for="n in 4"
          :key="n"
          class="bg-gray-200 h-8 w-32 rounded-lg"
        ></div>
      </div>

      <div class="flex gap-6 w-full">
        <div
          v-for="n in 2"
          :key="n"
          class="bg-gray-200 size-72 animate-pulse rounded-lg"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
