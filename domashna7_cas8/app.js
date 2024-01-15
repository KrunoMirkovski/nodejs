//? DA SE KREIRA VO CALCULATOR USTE 6 funkcii
//? DA SE KREIRA NOV HTML FILE STO KJE SE VIKA REZULTAT
//? 1. DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
//? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
//? 3. DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)
//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
//? SITE OVIE FUNKCII DA VRAKJAAT WEB STRANIICA
//? STRANICATA DA IMA NEKAKOV STYLING(boi, background, flex, border)
//? VO WEB STRANICATA DA IMA  NASLOV ZA STO SLUZI REZULTATOT
//? I DA IMA PARAGRAPH SO KOJ KJE SE OBNASUNVA ZADADENATA FUNKCIJA

//* MVC Arhitektura

//! Go povikuvame Express modulot
const express = require("express");
//! Go povikuvame calculator fajlot od controller
const calculator = require("./controller/calculator.js");

//! Kreirame express app
const app = express();

//! Kreirame ruti
app.get("/plospravoagolnik/:sirina/:visina", calculator.pravoagolnikP);

app.get("/stepeni/:op/:stepen", calculator.stepeni);

app.get("/kalkulator/:op/:a/:b", calculator.digitron);

app.get("/newton/:mass/:acc", calculator.calculateForce);

app.get("/plosTriagolnik/:osnova/:strana", calculator.plostinaTri);

//!Kreirame app.listen na porta 10000
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 10000");
});
