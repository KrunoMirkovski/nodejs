//! DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//! Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//! da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja

const express = require("express");
let ejs = require("ejs");

const { elements, addingEl } = require("./controller/functions");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/zelenchuk", elements);
// Na istata ruta, so post metoda dodavame nov element vo tabelata
app.post("/zelenchuk", addingEl);

// App ja slusame na porta
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 10000");
});
