<script setup>
import projetos from '@/components/projetos.vue';
</script>
<template>
  <div class="about">
    <projetos/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
