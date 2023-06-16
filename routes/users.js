import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({ mensagem: 'Rota de usuários...' })
});

export default router;
