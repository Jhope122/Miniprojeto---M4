

# 🧠 ConectaPsique

Esta API foi criada para prestar suporte às pessoas que buscam cuidar do bem-estar emocional.  
Ela oferece sugestões acessíveis de **livros**, **cursos** e **alimentos saudáveis**.

## 🎯 Objetivo

A API funciona como um apoio, oferecendo sugestões acessíveis de livros, cursos e alimentos saudáveis.  
Pode ser útil para iniciativas voltadas à saúde mental e também pode ser usada em sites que tratam do tema.

## 🛠 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript no lado do servidor  
- **Express** – Framework para criação do servidor e rotas  
- **Nodemon** – Reinicia o servidor automaticamente durante o desenvolvimento  
- **ECMAScript 6 (ES6)** – Utilizado para `import/export`  
- **JSON** – Formato para comunicação entre cliente e servidor
- **Método HTTP** - As rotas da API utilizam o método GET para retornar os dados.


## 📁 Estrutura do Projeto
src/ model/ - # Pastas do projeto --
livros.js  - # Dados sobre os livros --
alimentos.js - # Dados sobre os alimentos--
cursos.js - # Dados sobre os cursos--
server.js - # Configuração do servidor e rotas da API--
package.json - # Dependências do projeto--
.gitignore - # Ignora node_modules/ e package-lock.json--

## 🚀 Como usar a aplicação

1. 🧬 Clone o repositório no Git:  
   ```bash
   git clone https://github.com/Jhope122/Miniprojeto---M4.git

2. 📁 Acesse a pasta do projeto:

   cd Miniprojeto---M4


3. 📦 Instale as dependências:

    npm install express  
    npm install nodemon


4. ▶️ Inicie o servidor:

   Escrevendo no terminal - 

    npm run dev
 

5. 🌐 Acesse no navegador ou Insomnia:

http://localhost:3000                                # Porta de boas-vindas da API  
http://localhost:3000/livros                         # Lista todos os livros  
http://localhost:3000/livros/1                       # Lista livro por ID  
http://localhost:3000/alimentos                      # Lista todos os alimentos  
http://localhost:3000/alimentos/palavra/cérebro      # Lista alimentos por palavra-chave (ex: humor, triptofano)  
http://localhost:3000/cursos                         # Lista todos os cursos


---

©️ Licença e Direitos Autorais

Este projeto é de código aberto e distribuído sob a licença MIT.

Você pode usar, modificar, compartilhar e adaptar este código livremente, inclusive para fins comerciais, desde que mantenha os créditos à autora original.

> Aviso de isenção de responsabilidade:
Esta API foi criada com fins educativos e de apoio ao bem-estar emocional.
Não substitui acompanhamento profissional e não nos responsabilizamos por qualquer uso indevido das informações fornecidas.

Feito com carinho por Gisele 
