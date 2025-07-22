<script setup>
import { RouterLink, RouterView } from 'vue-router';


// Funções

// Função para fazer o scroll da tela baseado no link clicado
function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

</script>
<template>
    <!-- <nav class="flex justify-center items-center gap-15 min-h-[10vh] "> -->

        <!-- <RouterLink class="text-xl hover:text-2xl" to="/">Início</RouterLink>
        <RouterLink class="text-xl hover:text-2xl" to="/inicial">Quem sou</RouterLink>
        <RouterLink class="text-xl hover:text-2xl" to="/projetos">Projetos</RouterLink>
        <RouterLink class="text-xl hover:text-2xl" to="/contatos">Contatos</RouterLink> -->
        

    <!-- </nav> -->
    <ul class="flex justify-center items-center gap-15 min-h-[10vh] ">
            <li class="hover:cursor-pointer text-2xl"><a @click.prevent="scrollTo('inicio')">Início</a></li>
            <li class="hover:cursor-pointer text-2xl"><a @click.prevent="scrollTo('projetos')">Projetos</a></li>
            <li class="hover:cursor-pointer text-2xl"><a @click.prevent="scrollTo('contatos')">Contatos</a></li>
        </ul>

</template>