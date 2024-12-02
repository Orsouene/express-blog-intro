const express = require("express");
const app = express();
const PORT = 3000;
//  rotta che ritorna un testo
app.get("/dolce", (req, res) => {
  res.send("Server del mio blog");
});
app.listen(PORT, () => {
  console.log(`il mio server http://localhost:${PORT}`);
});

// file statici
app.use(express.static("public"));
// importare lista.js
const lista = require("./lista");
