<template>
  <div class="space-y-8">
    <div
      v-for="n in 5"
      :key="n"
      class="flex gap-2 border rounded-lg w-full h-[320px] bg-gray-200 animate-pulse"
    />
  </div>
</template>

<script setup></script>
