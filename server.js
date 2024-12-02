const express = require("express");
const app = express();
const PORT = 3000;
//  rotta che ritorna un testo
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
app.listen(PORT, () => {
  console.log(`il mio server http://localhost:${PORT}`);
});

// importare lista.js
const lista = require("./lista");
//  Rotta che restituisca un oggetto json
app.get("/bacheca", (req, res) => {
  res.json(lista);
});

// file statici
app.use(express.static("public"));
// Tutte le immagini
// Post-1
app.get("/ciambellone", (req, res) => {
  res.send(`<img src="images/ciambellone.jpeg">`);
});
// Post-2
app.get("/cracker", (req, res) => {
  res.send(`<img src="images/cracker_barbabietola.jpeg">`);
});
// Post-3
app.get("/pane", (req, res) => {
  res.send(`<img src="images/pane_fritto_dolce.jpeg">`);
});
// Post-4
app.get("/pasta", (req, res) => {
  res.send(`<img src="images/pasta_barbabietola.jpeg">`);
});
// Post-5
app.get("/torta", (req, res) => {
  res.send(`<img src="images/torta_paesana.jpeg">`);
});
