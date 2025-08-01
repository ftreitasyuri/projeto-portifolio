<script setup>
import { ref, onMounted } from 'vue';
import getWeather from '@/services/getWeather';

// Exemplo de url completa para a API do OpenWeather
//http://api.openweathermap.org/data/2.5/weather?q=salvador&appid=ec3e5be3d5fd36e296904389ad345a7c
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={ec3e5be3d5fd36e296904389ad345a7c}

// Definindo variáveis reativas
const dadosWeather = ref({});

// Função para obter os dados do clima
// const key = import.meta.env.VITE_API_KEY_OPEN_WEATHER;
const key = import.meta.env.VITE_API_KEY_OPEN_WEATHER;
const cidade = ref(''); // Cidade padrão para a busca
const dadosClima = async () => {
    try {
        const req = await getWeather(cidade.value, key)
        dadosWeather.value = req;
        console.log(dadosWeather.value);
    } catch (error) {
        console.log('Erro ao obter dados do clima:', error);
    }
}

// Limpar dados
const limpaDados = () => {
    cidade.value = '';
    dadosWeather.value = {};
}
</script>
<template>

    <main>
        <section class="sm:flex flex-row gap-10 justify-center items-center p-5">
            <!-- Previão do tempo -->

            <!-- Apresentação perfil -->
            <div class="flex flex-col gap-6 items-center  p-10">
                <!-- <img alt="Foto de Perfil"
                    class="rounded-full max-w-[65vw] w-[65vw] h-[30vh] sm:w-[15vw] mb-10 border-5 border-gray-50"
                    src="@/assets/images/perfil.jpg" /> -->

                <img alt="Foto de Perfil" src="@/assets/images/perfil.jpg" class="rounded-full border-[5px] border-gray-50  mx-auto
                        max-w-[300px] 
                        h-[30vh] w-[60vw] 
                        sm:h-[20vh] sm:w-[60vw] 
                        md:w-[20vw] 
                        lg:h-[30vh] lg:w-[15vw] 
                        mb-10" />

                <span class="text-2xl sm:text-5xl">Yuri Freitas Queiroz</span>
                <details>
                    <summary>Redes Sociais</summary>
                    <div class="flex gap-2">
                        <a class="text-lg border-1 border-second hover:border-1 hover:border-b-amber-200" href="https://www.linkedin.com/in/yuri-queiroz-77552419a/" target="_blank">Linkedin</a>
                        <a class="text-lg border-1 border-second hover:border-1 hover:border-b-amber-200" href="https://github.com/ftreitasyuri" target="_blank">GitHub</a>                        
                    </div>
                </details>

                <span class="text-fifth text-sm sm:text-xl">Desenvolvedor Full Stack (JavaScript e PHP)</span>
                <span class="text-fifth sm:text-xl">Frameworks: Laravel e Vue</span>
                <!-- <a href="https://www.linkedin.com/in/yuri-queiroz-77552419a/" target="_blank"
                    class="text-fifth sm:text-xl hover:cursor-pointer">Meu Linkedin</a> -->

                <div class="flex sm:gap-5 mt-15">
                    <img class="w-[10vw] sm:w-[4vw] rounded-full border-1 " src="@/assets/images/php.jpg"
                        alt="Imagem_do_php">
                    <img class="w-[10vw] sm:w-[4vw] rounded-full border-1 " src="@/assets/images/laravel.png"
                        alt="Imagem_do_laravel">
                    <img class="w-[10vw] sm:w-[4vw] rounded-full border-1 " src="@/assets/images/javaScript.png"
                        alt="Imagem_do_Java_Script">
                    <img class="w-[10vw] sm:w-[4vw] rounded-full border-1 " src="@/assets/images/vue.png"
                        alt="Imagem_do_vue">
                    <img class="w-[10vw] sm:w-[4vw] rounded-full border-1 " src="@/assets/images/html.png"
                        alt="Imagem_do_vue">
                    <img class="w-[10vw] sm:w-[4vw] rounded-full border-1 " src="@/assets/images/css.jpg"
                        alt="Imagem_do_vue">
                    <img class="w-[10vw] sm:w-[4vw] rounded-full border-1 " src="@/assets/images/python.jpg"
                        alt="Imagem_do_vue">
                </div>
            </div>
        </section>

    </main>

</template>