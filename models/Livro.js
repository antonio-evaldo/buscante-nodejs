import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    { 
        id: {type: String},
        titulo: {type: String, required:true},
        dataPublicacao: {type: String,required:true},
        editora: {type: String, required:true},
        numeroPaginas: {type: Number,required:true},
        sinopse: {type: String, required:true}

    }
);
const livros = mongoose.model('livros',livroSchema);
export default livros;