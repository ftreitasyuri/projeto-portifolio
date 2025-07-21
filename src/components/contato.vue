<template>
  <div class="p-8  bg-primary">
    <h1 class="text-center text-3xl">Contate-nos</h1>
    <form @submit.prevent="sendEmail" class="space-y-4 max-w-xl mx-auto p-6 rounded shadow bg-primary">
      <input v-model="form.name" type="text" placeholder="Nome" class="w-full border-gray-50 border-1 rounded-lg" required />
      <input v-model="form.subject" type="text" placeholder="Assunto Ex: Desenvolvimento de um app" class="w-full border-gray-50 border-1 rounded-lg"
        required />
      <input v-model="form.company" type="text" placeholder="Empresa ou Nome Fantasia" class="w-full border-gray-50 border-1 rounded-lg" />
      <input v-model="form.email" type="email" placeholder="Email corporativo ou pessoal" class="w-full border-gray-50 border-1 rounded-lg" required />
      <input v-model="form.phone" type="tel" placeholder="Telefone ou celular" class="w-full border-gray-50 border-1 rounded-lg" maxlength="11" />
      <textarea v-model="form.message" placeholder="Descreva aqui a sua solicitação/dúvida" class="w-full border-gray-50 border-1 rounded-lg h-32"
        required></textarea>
      <!-- <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button> -->
      <button type="submit" class="bg-third w-full rounded-md h-12 text-lg text-white font-bold">Enviar</button>
    </form>
  </div>
</template>

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
</script>

<style>

/* .input{
  width: 100%;
  border: 2px red solid;
  border-radius: 10%;
} */
</style>
