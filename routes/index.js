import express from 'express';
import db from "../src/config/dbConnect.js"
import livros from '../models/Livro.js';

db.on("error",console.log.bind(console,'Erro de conexão do banco'))
db.once("open", ()=>{
  console.log('Conexão com o banco feita com sucesso')
})

const router = express.Router();


// const livros=[
//   {"id":1,"dataPublicacao":"12/12/2022","editora":"Minha Editora New","numeroPaginas":350,"sinopse":"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."},
//   {"id":2,"dataPublicacao":"24/10/2019","editora":"Editora DoceLar","numeroPaginas":1024,"sinopse":"Sem sinopse."}
// ]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ mensagem: 'Buscante - seu buscador de livros online.' });
});

router.get('/livros', function(req, res, next) {
  livros.find((err, livros)=>{
    res.status(200).json(livros);
  })
  
});

router.get('/livros/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const result = livros.filter(liv=>liv.id===id)
  console.log(result);
  res.status(200).json(result);
});

router.post('/livros', function(req, res, next) {
  const novoLivro = req.body;
  console.log(novoLivro);
  livros.push(novoLivro);
  res.status(201).send({mensagem:'Livro adicionado com sucesso!'});
});

router.delete('/livros/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  livros.splice(id,1);
  console.log(livros);
  res.status(200).send({mensagem:'Livro removido com sucesso!'});
});

export default router;