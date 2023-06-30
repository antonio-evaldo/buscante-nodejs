import livros from "../../models/Livro.js"
import db from "../../config/dbConnect.js"

db.on("error", console.log.bind(console, 'Erro de conexão do banco'))
db.once("open", () => {
   console.log('Conexão com o banco feita com sucesso')
})

class LivroController {
   //listar livros
   static listarLivros = async (req, res) => {
      try {
         const livrosResultado = await livros.find();

         res.status(200).json(livrosResultado);
      } catch (erro) {
         console.log(erro);
         res.status(500).json(erro);
      }
   }

   //buscar por id
   static getByIdLivro = async (req, res) => {
      const id = req.params.id;
      try {
         const livroResultado = await livros.findById(id);

         res.status(200).json(livroResultado);
      } catch (erro) {
         console.log(erro);
         res.status(500).json(erro);
      }
   }

   //adicionar livros
   static addLivros = async (req, res) => {
      try {
         console.log(req.body);

         const novoLivro = new livros(req.body);
   
         const novoLivroResultado = await novoLivro.save();
   
         res.status(201).send(novoLivroResultado);
      } catch (erro) {
         console.log(erro);
         res.status(500).json(erro);
      }
   }

   //atualiza livros
   static updLivros = async (req, res) => {
      const { id } = req.params;

      try {
         const livroResultado = await livros.findByIdAndUpdate(id, req.body, {
            new: true
         });
   
         res.status(201).send(livroResultado);
      } catch (erro) {
         console.log(erro);
         res.status(500).json(erro);
      }
   }

   //remove livro
   static delLivro = async (req, res) => {
      const { id } = req.params;

      try {
         const livroResultado = await livros.findByIdAndDelete(id, req.body);
   
         res.status(201).send(livroResultado);
      } catch (erro) {
         console.log(erro);
         res.status(500).json(erro);
      }
   }
}

export default LivroController;