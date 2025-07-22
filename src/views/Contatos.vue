<script setup>
import contato from '@/components/contato.vue';
</script>
<template>
  <div id="contatos" class="about">
    <contato/>
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
