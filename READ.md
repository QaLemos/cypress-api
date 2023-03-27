<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
</head>
<body>
	<h1>Teste de API utilizando Serverest e Cypress</h1>
  
  <p>Este repositório contém exemplos de testes automatizados de API utilizando o Serverest como backend de teste e o Cypress como ferramenta de teste.</p>

<h2>Sobre o Serverest</h2>

<p>O Serverest é um backend de teste desenvolvido pela QA Ninja que permite a criação de uma API fictícia para testes de integração e e2e. Com ele, é possível simular requisições e respostas HTTP, além de criar mocks para diferentes cenários de teste.</p>

<p>Para mais informações sobre o Serverest, consulte a documentação oficial em: <a href="https://serverest.dev/">https://serverest.dev/</a></p>

<h2>Sobre o Cypress</h2>

<p>O Cypress é uma ferramenta de teste automatizado de ponta a ponta para aplicativos web modernos. Ele é executado no navegador e permite que os testes sejam escritos em JavaScript.

Para mais informações sobre o Cypress, consulte a documentação oficial em: https://www.cypress.io/</p>

<h1>Configuração do ambiente</h1>
	
<p>Abra seu terminal ou prompt de comando e navegue até a pasta onde você deseja instalar o Serverest.</p>
<p>Digite o seguinte comando para instalar o Serverest usando o npm (Node Package Manager):</p>

	npm install -g serverest

<p>O parâmetro "-g" indica que o pacote será instalado globalmente em sua máquina.</p>
<p>Aguarde até que a instalação seja concluída.</p>

<p>Para executar os testes deste repositório, você precisa ter o Node.js e o NPM (ou Yarn) instalados em seu computador.</p>
<p>Em seguida, siga as instruções abaixo:</p>
	<ol>
		<li>Clone este repositório em seu computador:</li>
		<pre><code>git clone https://github.com/QaLemos/cypress-api.git</code></pre>
		<li>Instale as dependências do projeto:</li>
		<pre><code>npm install</code></pre>
		<p>ou</p>
		<pre><code>yarn install</code></pre>
		<li>Inicie o servidor do Serverest:</li>
		<pre><code>npx serverest</code></pre>
		<p>ou</p>
		<pre><code>yarn serverest</code></pre>
		<li>Em outro terminal, inicie os testes do Cypress:</li>
		<pre><code>npx cypress open</code></pre>
		<p>ou</p>
		<pre><code>yarn cypress open</code></pre>
		<li>Selecione o arquivo de teste desejado e aguarde a execução.</li>
	</ol>
<h2>Estrutura do projeto</h2>
	<ul>
		<li>/cypress/integration: contém os arquivos de teste escritos em Cypress.</li>
		<li>/cypress/support: contém arquivos de suporte, como comandos personalizados e configurações.</li>
		<li>/serverest: contém os arquivos de configuração e de dados utilizados pelo Serverest.</li>
		<li>/cypress.json: arquivo de configuração do Cypress.</li>
	</ul>
	<h2>Contato</h2>
	<p>Para entrar em contato comigo, você pode acessar o meu perfil no LinkedIn através do seguinte link:</p>
<a href="https://www.linkedin.com/in/eduardo-lemos-84b82569/">https://www.linkedin.com/in/eduardo-lemos-84b82569/</a>
