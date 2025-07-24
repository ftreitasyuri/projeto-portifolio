<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- <main class="bg-primary sm:flex flex-col items-center mt-10 mb-10 p-10 border-b-3"> -->
    <main id="projetos" class="w-full flex flex-col gap-10 sm:justify-center sm:items-center mt-10 p-10 ">
        <span class="text-center text-4xl mb-10">Projetos</span>

        <div class="flex flex-col sm:flex-row gap-10">
            <!-- Card -->
            <a href="https://smartechenter.com" target="_blank">
                <div
                    class="flex flex-col bg-third border-3 border-primary rounded-xl cursor-pointer hover:border-3 hover:border-gray-100 hover:transition-discrete">
                    <img src="../assets/img_projects/CHAMADOS_DESKTOP.jpg" alt="Imagem do site de chamados" class="sm:max-w-[30vw]                     
                    ">
                    <span class="text-center sm:text-2xl mt-2 mb-2">Portal Chamados - SMTE</span>
                    <span class="text-center sm:text-lg p-2 flex-wrap">
                        Site/App de chamados focado na interação do cliente junto ao help desk<br>
                        Acesso: yuri@dev.com <br>
                        Senha: Admin123
                    </span>
                </div>
            </a>

            <!-- <a href="https://crm-front-end-nine.vercel.app" target="_blank"> -->
            <router-link to="crm-smte">
                <div
                    class="flex flex-col bg-third border-3 border-primary rounded-xl cursor-pointer hover:border-3 hover:border-gray-100 hover:transition-discrete">
                    <img src="../assets/img_projects/CRM_DESKTOP.jpg" alt="Imagem do site de chamados" class="sm:max-w-[30vw]                     
                    ">
                    <span class="text-center sm:text-2xl mt-2 mb-2">CRM - SMTE</span>
                    <span class="text-center sm:text-lg p-2 flex-wrap">
                        Site/App CRM para gerenciamento de clientes, contatos, campanhas e leads<br>
                        Acesso: yuri@dev.com <br>
                        Senha: dmin123
                    </span>
                </div>
            </router-link>

            <!-- </a> -->
            <a href="https://hr-management-xi-eight.vercel.app" target="_blank">
                <div
                    class="flex flex-col bg-third border-3 border-primary rounded-xl cursor-pointer hover:border-3 hover:border-gray-100 hover:transition-discrete">
                    <img src="../assets/img_projects/SITE_FORM_DESKTOP.jpg" alt="Imagem do site de chamados" class="sm:max-w-[30vw]                     
                    ">
                    <span class="text-center sm:text-2xl mt-2 mb-2">Gerenciador RH - SMTE</span>
                    <span class="text-center sm:text-lg p-2 flex-wrap">
                        Site/App Gerenciado de Recursos Humano<br>
                        Acesso: usuário <br>
                        Senha: xxxxxx
                    </span>
                </div>
            </a>
        </div>

    </main>

</template>