<template>
    <section id="rh-overview" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8 text-primary">Apresentação do Gerenciador de RH</h2>

            <!-- Objetivo -->
            <div class="mb-12">
                <h3 class="text-2xl font-semibold text-blue-600 mb-4">🎯 Objetivo do Sistema</h3>
                <p class="text-gray-700 leading-relaxed">
                    Nosso sistema de RH foi criado para centralizar o <strong>controle de colaboradores</strong>,
                    <strong>gestão de cargos e salários</strong>, <strong>registro de ponto</strong>,
                    <strong>processos seletivos</strong> e <strong>documentações internas</strong>.
                    Ideal para empresas que buscam digitalizar processos, reduzir erros operacionais e melhorar a gestão
                    de pessoas.
                </p>
            </div>

            <!-- Funcionalidades -->
            <div class="mb-12 space-y-8">
                <h3 class="text-2xl font-semibold text-blue-600 mb-4">⚙️ Funcionalidades Principais</h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h4 class="font-semibold text-xl mb-2 text-primary">👥 Cadastro de Colaboradores</h4>
                        <p class="text-gray-600">
                            Gerencie dados completos dos colaboradores: dados pessoais, documentos, contratos,
                            dependentes e status de atividade.
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h4 class="font-semibold text-xl mb-2 text-primary">⏱ Controle de Ponto</h4>
                        <p class="text-gray-600">
                            Registros de entrada, pausa e saída. Acompanhamento diário, semanal ou mensal, com
                            relatórios exportáveis.
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h4 class="font-semibold text-xl mb-2 text-primary">📄 Gestão de Cargos e Salários</h4>
                        <p class="text-gray-600">
                            Cadastro e organização de cargos com faixa salarial, benefícios, descrição de função e
                            relatórios gerenciais.
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow">
                        <h4 class="font-semibold text-xl mb-2 text-primary">📢 Recrutamento e Seleção</h4>
                        <p class="text-gray-600">
                            Gerencie processos seletivos: abertura de vagas, etapas, feedbacks e cadastro de candidatos
                            com currículos.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Benefícios -->
            <section class="sm:flex justify-between">
                <div>
                    <h3 class="text-2xl font-semibold text-blue-600 mb-4">✅ Benefícios para o setor de RH</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li>Centralização das informações dos colaboradores;</li>
                        <li>Redução de erros em folha de ponto e jornada;</li>
                        <li>Otimização do recrutamento com histórico completo de candidatos;</li>
                        <li>Organização e controle de documentos de forma segura e prática;</li>
                        <li>Dashboard de indicadores e relatórios detalhados;</li>
                        <li>
                            Usuário: yuri@dev.com &
                            Senha: admin123
                        </li>
                        <li class="text-blue-700">
                            <span>Sem link de documentação ainda</span>
                                
                            
                        </li>

                    </ul>
                </div>

                <div>
                    <a href="https://hr-management-xi-eight.vercel.app/login" target="_blank">
                        <div
                            class="flex flex-col bg-third border-3 border-primary rounded-xl cursor-pointer hover:border-gray-100 transition duration-300">
                            <img src="../assets/img_projects/SITE_FORM_DESKTOP.jpg" alt="Imagem do sistema RH"
                                class="sm:max-w-[30vw]">
                        </div>
                    </a>
                </div>
            </section>

            <!-- Aviso -->
            <section class="mt-8">
                <div>
                    <span class="text-primary">
                        OBS: Este sistema está em constante evolução e novas funcionalidades estão sendo<br>
                        implementadas, como integração com folha de pagamento e gestão de benefícios!
                    </span>
                </div>
            </section>
        </div>
    </section>
</template>
