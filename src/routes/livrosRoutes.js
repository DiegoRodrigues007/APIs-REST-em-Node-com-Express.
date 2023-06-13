import Express from "express";
import livroController from "../controllers/livrosController.js";

const router = Express.Router();

router
    .get('/livros', livroController.listarLivros);


export default router;