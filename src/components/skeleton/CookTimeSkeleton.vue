<template>
  <div class="flex flex-wrap gap-2 items-center space-y-1">
    <div
      v-for="n in 3"
      :key="n"
      class="border rounded-full bg-gray-200 h-6 w-1/3 animate-pulse"
    />
  </div>
</template>

<script setup></script>
