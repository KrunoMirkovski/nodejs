const { response } = require("express");
const fs = require("fs");

const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, "utf8", (err, content) => {
      if (err) {
        return fail(err);
      }
      if (object) {
        for (property in object) {
          content = content.replaceAll(`{{${property}}}`, object[property]);
        }
        return success(content);
      }
    });
  });
};

//! 1. DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
const pravoagolnikP = async (req, res) => {
  const sirina = req.params.sirina;
  const visina = req.params.visina;
  const plosPravoagolnik = sirina * visina;
  const response = await parseTemplate("rezultat.html", {
    ime: "Ploshtina na pravoagolnik",
    data: plosPravoagolnik,
    objasnuvanje:
      "Ova e rezultatot od presmetkata za ploshtina na pravoagolnik",
  });

  res.send(response);
};

//! 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
const stepeni = async (req, res) => {
  let rezultat = "";
  switch (req.params.op) {
    case "c2f":
      rezultat = req.params.stepen * 1.8 + 32;
      break;
    case "f2c":
      rezultat = (req.params.stepen - 32) * 0.556;
      break;
    default:
      return (rezultat = "Unknown operator");
  }
  const response = await parseTemplate("rezultat.html", {
    ime: "Konvertor na stepeni",
    data: rezultat,
    objasnuvanje:
      "Ova e rezultatot od presmetkata za konvertorot na stepeni od f vo c i obratno",
  });
  res.send(response);
};

//! 3. DA SE KREKIRA KALKULATOR(SWITCH || IF ELSE)
const digitron = async (req, res) => {
  let operacija = "";
  switch (req.params.op) {
    case "sobiranje":
      operacija = `${Number(req.params.a) + Number(req.params.b)}`;
      break;
    case "odzemanje":
      operacija = `${Number(req.params.a) - Number(req.params.b)}`;
      break;
    case "mnozenje":
      operacija = `${Number(req.params.a) * Number(req.params.b)}`;
      break;
    case "delenje":
      operacija = `${Number(req.params.a) / Number(req.params.b)}`;
      break;
    default:
      return res.send("Unknown operator");
  }
  const response = await parseTemplate("rezultat.html", {
    ime: "Presmetki so kalkulator",
    data: operacija,
    objasnuvanje: "Ova e rezultatot od presmetkata so kalkulator",
  });

  res.send(response);
};

//! 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
const calculateForce = async (req, res) => {
  const mass = req.params.mass;
  const acc = req.params.acc;
  const sila = mass * acc;
  const response = await parseTemplate("rezultat.html", {
    ime: "Presmetka na sila",
    data: sila,
    objasnuvanje: "Ova e rezultatot od presmetkata za sila",
  });
  res.send(response);
};

//! 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK

const plostinaTri = async (req, res) => {
  const osnova = req.params.osnova;
  const strana = req.params.strana;
  const plosTri = (osnova * strana) / 2;
  const response = await parseTemplate("rezultat.html", {
    ime: "Presmetka na ploshtina od triagolnik",
    data: plosTri,
    objasnuvanje: "Ova e rezultatot od presmetkata za ploshtina na triagolnik",
  });
  res.send(response);
};

module.exports = {
  pravoagolnikP,
  stepeni,
  digitron,
  calculateForce,
  plostinaTri,
};
