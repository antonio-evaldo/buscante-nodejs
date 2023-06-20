//import livros from "..models/Livros.js"

const livros=[
    {"id":1,"dataPublicacao":"12/12/2022","editora":"Minha Editora New","numeroPaginas":350,"sinopse":"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."},
    {"id":2,"dataPublicacao":"24/10/2019","editora":"Editora DoceLar","numeroPaginas":1024,"sinopse":"Sem sinopse."}
  ];

class LivroController{
    //listar livros
   static listarLivros=(req,res)=>{
    res.status(200).json(livros);
   }

   //buscar por id
   static getByIdLivro=(req,res)=>{
      const id = parseInt(req.params.id);
      const result = livros.filter(liv=>liv.id===id)
      console.log(result);
      res.status(200).json(result);
   }

   //adicionar livros
   static addLivros=(req,res)=>{
    const novoLivro = req.body;
      livros.push(novoLivro);
      res.status(201).send({mensagem:'Livro adicionado com sucesso!'});
   }

   //atualiza livros
   static updLivros=(req,res)=>{
      const index = buscaLivro(parseInt(req.params.id));
      livros[index].sinopse= req.body.sinopse;  
      res.status(200).json(livros);
   }

   //remove livro
   static delLivro=(req,res)=>{
        const id = parseInt(req.params.id);
        livros.splice(id,1);
        console.log(livros);
        res.status(200).send({mensagem:'Livro removido com sucesso!'});
   }
}

function buscaLivro(id)
{
  const livroItem = livros.findIndex(livro=>livro.id==id);
  return livroItem;
}

export default LivroController;