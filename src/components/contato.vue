<script setup>
import { reactive } from 'vue'
import emailjs from 'emailjs-com'

const form = reactive({
  name: '',
  subject: '',
  company: '',
  email: '',
  phone: '',
  message: '',
})

const sendEmail = () => {
  emailjs.send('service_yef2kht', 'template_pm7zbgq', form, 'EIaoy-GfdMjuJhXaO')
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.name = ''
      form.subject = ''
      form.company = ''
      form.email = ''
      form.phone = ''
      form.message = ''

    })
    .catch((error) => {
      console.error('Erro:', error)
      alert('Falha ao enviar mensagem.')
    })
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
  <div class=" w-full p-8 sm:flex flex-col justify-center items-center ">

    <h1 class="text-center text-4xl mb-10">Contate-me</h1>

    <form @submit.prevent="sendEmail" class="max-w-[1250px] space-y-8 mx-auto p-6 rounded shadow bg-primary">
      <input v-model="form.name" type="text" placeholder="Nome"
        class="w-full border-gray-50 border-1 rounded-lg sm:text-2xl sm:p-4" required />
      <input v-model="form.subject" type="text" placeholder="Assunto Ex: Desenvolvimento de um app"
        class="w-full border-gray-50 border-1 rounded-lg sm:text-2xl sm:p-4" required />
      <input v-model="form.company" type="text" placeholder="Empresa ou Nome Fantasia"
        class="w-full border-gray-50 border-1 rounded-lg sm:text-2xl sm:p-4" />
      <input v-model="form.email" type="email" placeholder="Email corporativo ou pessoal"
        class="w-full border-gray-50 border-1 rounded-lg sm:text-2xl sm:p-4" required />
      <input v-model="form.phone" type="tel" placeholder="Telefone ou celular"
        class="w-full border-gray-50 border-1 rounded-lg sm:text-2xl sm:p-4" maxlength="11" />
      <textarea v-model="form.message" placeholder="Descreva aqui a sua solicitação/dúvida"
        class="w-full border-gray-50 border-1 rounded-lg h-32 sm:text-2xl sm:p-4" required></textarea>
      <!-- <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button> -->
      <button type="submit"
        class="bg-third w-full rounded-md h-12 text-lg text-white font-bold hover:cursor-pointer sm:text-2xl">Enviar</button>
    </form>
    <div class="w-full sm:flex justify-end">
      <i class="fa-solid fa-up-long border-1 rounded-full p-4 hover:bg-second hover:cursor-pointer "
      @click.prevent="scrollTo('inicio')"
      ></i>
    </div>
  </div>

</template>



<style>
/* .input{
  width: 100%;
  border: 2px red solid;
  border-radius: 10%;
} */
</style>
