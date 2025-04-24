import express from 'express';
import {livros} from './src/model/livros.js';
import {alimentos} from './src/model/alimentos.js';
import {cursos} from './src/model/cursos.js';

const app=express();
const PORT=3000;

//Mensagem de boas-vindas em http://localhost:3000 //
app.get('/', (req,res) =>{
    res.send(`
        <div style="text-align: center; padding-top: 80px;">
          <h1 style="color: purple;">Bem-vindos!</h1>
          <p>
            Aqui você pode encontrar dicas de <strong>livros acessíveis</strong>, 
            <strong>alimentos bons para o bem-estar físico e mental</strong>, 
            e <strong>cursos para entender suas emoções</strong>.
          </p>
        </div>
      `);
      });

// Lista todos os livros//

app.get('/livros', (req,res) =>{

    res.json(livros);
});

//Lista os livros pelo id e entrega a mensagem de livro não encontrado, caso coloque um id que não exista//
//Exemplo de busca por id - http://localhost:3000/livros/1 //

app.get("/livros/:id",(req, res) => {
    const id = parseInt(req.params.id);
    const livro = livros.find(l=> l.id === id);
    
    if (livro) {
        res.json(livro);
    }
    
    else {
        res.status(404).json({mensagem:'Livro não encontrado'});
    }
    });


//Lista todos os alimentos//

app.get('/alimentos', (req,res) =>{

    res.json(alimentos);
});


//Lista os alimentos pela palavra-Exemplo: http://localhost:3000/alimentos/palavra/triptofano //

app.get("/alimentos/palavra/:palavra", (req, res) => {
    const palavra = req.params.palavra.toLowerCase();
  
    const resultado = alimentos.filter(alimento =>
      alimento.nome.toLowerCase().includes(palavra) ||
      alimento.beneficios.toLowerCase().includes(palavra)
    );
  
    console.log("Resultado encontrado:", resultado);

    if (resultado.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum alimento encontrado com essa palavra." });
    }
  
    res.json(resultado);
  });
  

//Lista todos os cursos//

app.get('/cursos', (req,res) =>{

    res.json(cursos);
});


//Inicia o servidor e mostra os endereços de acesso//
app.listen(PORT,()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
console.log(`Acesse a rota de livros em http://localhost:${PORT}/livros`);
console.log(`Acesse a rota de alimentos em http://localhost:${PORT}/alimentos`);
console.log(`Acesse a rota de cursos em http://localhost:${PORT}/cursos`);








    

