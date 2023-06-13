import Express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = Express();

app.use(Express.json());

routes(app);

// ARRAY DOS OBJETOS QUE ESTÃO SENDO EXECUTADO NAS ROTAS
// const livros = [
//   { id: 1, titulo: "Senhor dos Aneis" },
//   { id: 2, titulo: "Supernatural" },
// ];

// ROTAS
app.get("/", (req, res) => {
  res.status(200).send("Curso Node");
});



app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;

  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} é removido com sucesso`);
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
