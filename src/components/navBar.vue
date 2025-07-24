<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import getWeather from '@/services/getWeather';
import router from '@/router';

// Exemplo de url completa para a API do OpenWeather
//http://api.openweathermap.org/data/2.5/weather?q=salvador&appid=ec3e5be3d5fd36e296904389ad345a7c
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={ec3e5be3d5fd36e296904389ad345a7c}

// Definindo variáveis reativas
const dadosWeather = ref({});
const error = ref(null);

// Função para obter os dados do clima
// const key = import.meta.env.VITE_API_KEY_OPEN_WEATHER;
const key = import.meta.env.VITE_API_KEY_OPEN_WEATHER;
const cidade = ref(''); // Cidade padrão para a busca
const dadosClima = async () => {
    try {
        const req = await getWeather(cidade.value, key)
        dadosWeather.value = req;
        console.log(dadosWeather.value);
    } catch (e) {
        console.log('Erro ao obter dados do clima:', e);
        error.value = 'Erro ao obter os dados do clima. Verifique a cidade ou tente novamente mais tarde.';
    }
}

// Limpar dados
const limpaDados = () => {
    cidade.value = '';
    dadosWeather.value = {};
    error.value = null;
}


// Função para fazer o scroll da tela baseado no link clicado
function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

</script>
<template>
    <main class="flex flex-col justify-around items-center p-4">


        <ul class="flex justify-center items-center gap-15 min-h-[10vh] ">
            <div v-if="$router.path ==! 'crm-smte'" >
                <li class="hover:cursor-pointer text-2xl"><a @click.prevent="scrollTo('inicio')">Início</a></li>
            </div>
<!--  v-if="$route.path === '/'"> -->
            <div v-else>
                <router-link to="/">
                    <li class="hover:cursor-pointer text-2xl">Início</li>
                </router-link>

            </div>
            <li class="hover:cursor-pointer text-2xl"><a @click.prevent="scrollTo('projetos')">Projetos</a></li>
            <li class="hover:cursor-pointer text-2xl"><a @click.prevent="scrollTo('contatos')">Contatos</a></li>
        </ul>

        <div>
            <form action="" class="hidden sm:flex">
                <div class="flex gap-2 p-5 items-center ">
                    <label for="cidade" class="text-xl">Cidade</label>
                    <input type="text" id="cidade" v-model="cidade" placeholder="Digite a cidade para saber o clima"
                        class="border-2 border-gray-300 rounded-md p-2 w-[80vw] sm:w-[20vw]">
                    <button @click.prevent="dadosClima"
                        class="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">Buscar Clima</button>
                    <button @click.prevent="limpaDados"
                        class="bg-green-500 text-white rounded-md p-2 hover:bg-green-600">Limpar Dados</button>


                </div>
                <div v-if="dadosWeather.main" class="z-10 p-2">
                    <h2 class="text-xl">Clima em {{ dadosWeather.name }}</h2>
                    <p>Temperatura: {{ dadosWeather.main.temp }}°C</p>
                    <p>Condição: {{ dadosWeather.weather[0].description }}</p>
                </div>

            </form>
            <div v-if="error" class="border-1 border-amber-50 text-red-500 text-lg p-2">
                <p class="flex-wrap">Erro ao obter os dados do clima. Verifique a cidade ou tente novamente mais tarde.
                </p>

            </div>
        </div>
        <!-- 
         <div>
            <form action="" class="flex">
                <div class="flex gap-2 p-5 items-center ">
                    <label for="cidade" class="text-xl">Cotação</label>
                    <input type="text" id="cidade" v-model="cidade" placeholder="RS"
                        class="border-2 border-gray-300 rounded-md p-2 w-[80vw] sm:w-[20vw]">
                    <button @click.prevent="dadosClima"
                        class="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">Cotar</button>
                    <button @click.prevent="limpaDados"
                        class="bg-green-500 text-white rounded-md p-2 hover:bg-green-600">Limpar Dados</button>


                </div>
                <div v-if="dadosWeather.main" class="z-10 p-2">
                    <h2 class="text-xl">Clima em {{ dadosWeather.name }}</h2>
                    <p>Temperatura: {{ dadosWeather.main.temp }}°C</p>
                    <p>Condição: {{ dadosWeather.weather[0].description }}</p>
                </div>

            </form>
        </div> -->

    </main>

</template>