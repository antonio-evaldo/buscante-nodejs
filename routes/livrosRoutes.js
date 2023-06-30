import express from 'express';
import LivroController from '../src/controllers/livrosController.js';

const router = express.Router();

router.get("/livros",LivroController.listarLivros);
router.get("/livros/:id",LivroController.getByIdLivro);
router.post("/livros",LivroController.addLivros);
router.put("/livros/:id",LivroController.updLivros);
router.delete("/livros/:id",LivroController.delLivro);

export default router;
