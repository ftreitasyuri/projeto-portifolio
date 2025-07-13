<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <nav class="flex justify-center items-center gap-10 bg-primary min-h-[10vh]">

        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/about">Quem sou</RouterLink>
        <RouterLink to="/about">Projetos</RouterLink>
        <RouterLink to="/about">Contatos</RouterLink>
        
    </nav>

</template>