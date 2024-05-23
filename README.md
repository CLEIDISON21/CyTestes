# testes com cypress 

Visão Geral
Esse é um arquivo de um estudo com essa poderosa ferramenta de automação, onde, nesse código de automação, possuímos testes funcionais de login no frontend e testes de API, todos em ambientes de estudo.

Pré-requisitos
Node.js
npm
Cypress 
inclusão de pipeline CI/CD
Configuração do GitHub Actions: Criei um arquivo CI.yml no meu repositório com as etapas necessárias para executar os testes. Usei o evento on: push para acionar os testes sempre que houver um push de código.

Iniciando o Servidor: Antes de executar os testes Cypress, iniciei o servidor usando o pacote serverest, garantindo que o ambiente estivesse pronto para os testes.

Executando os Testes Cypress: Usei a ação oficial do Cypress no GitHub Actions para executar meus testes end-to-end de forma automatizada.

Armazenamento de Artefatos: Configurei o GitHub Actions para armazenar capturas de tela e vídeos dos testes como artefatos, permitindo uma fácil análise de falhas.
