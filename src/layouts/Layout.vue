<template>
  <section class="flex flex-col justify-between min-h-screen h-screen w-full">
    <Navbar />
    <main class="flex-1 bg-gray-50">
      <slot></slot>
    </main>
    <Footer />
  </section>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
