import express from 'express';
import livros from "./livrosRoutes.js";

const routes = (app)=>{
  app.route('/').get((req,res)=>{
    res.status(200).send({mensagem:"Aplicação buscante."})
  })

  app.use(express.json(),
     livros)
}

export default routes
