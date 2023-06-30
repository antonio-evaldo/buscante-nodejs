import livros from "../../models/Livro.js"
import db from "../../config/dbConnect.js"

db.on("error",console.log.bind(console,'Erro de conexão do banco'))
db.once("open", ()=>{
  console.log('Conexão com o banco feita com sucesso')
})

class LivroController{
    //listar livros
   static listarLivros=(req,res)=>{
      livros.find((err, livros)=>{
         res.status(200).json(livros);
       })
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