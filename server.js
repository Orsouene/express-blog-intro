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
