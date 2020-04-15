<h1> DOE-project </h1>


<h2>Tecnologias Utilizadas</h2>

<li>NodeJs</li>
<li>Javascript</li>
<li>HTML</li>
<li>CSS</li>
<li>Postgres</li>
<li>Express</li>
<li>Nunjucks</li>



<h2>Desenvolvimento</h2>

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:
```shell
cd "diretorio de sua preferencia"
git clone https://github.com/Emerson-Duarte/doe-project.git
```
E executar "npm install", para instalação das dependências.

<h2>Configuração</h2>

<p>Para executar o projeto, foi necessária a utilização do Node ("npm init") e 
Express ("npm install express") responsável por gerenciar requisições e rotas, para rodar o backend da aplicação, além da template engine Nunjucks ("npm install nunjucks").</p>
<p>E para uma atualização automática do servidor instalar o módulo Nodemon ("npm install -D nodemon"), efetuando a troca
dentro de 'package.json' para  ' "start": "nodemon server.js" '.</p>
<p>Foi utilizado um banco de dados SQL, e feita a conexão com a dependência "pg" ("npm install pg")</p>


<h2>Issues</h2>

<p>Quando dado o submit em modo dark, ele dá um redirect, e troca para o modo light</p>


