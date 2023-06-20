import express from 'express';
import LivroController from '../src/controllers/livrosController.js';

const router = express.Router();

router.get("/livros",LivroController.listarLivros);
router.get("/livros/:id",LivroController.getByIdLivro);
router.post("/livros/add",LivroController.addLivros);
router.put("/livros/upd/:id",LivroController.updLivros);
router.delete("/livros/del/:id",LivroController.delLivro);

export default router;
