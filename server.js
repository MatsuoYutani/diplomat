const { config } = require("dotenv");
const express = require("express");
const app = express();

config();

const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.static("public"));

// TODO Adicionar rotas
app.get("/giphy", require("./src/routes/giphy"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor está sendo executado em http://localhost:${port}`);
});
