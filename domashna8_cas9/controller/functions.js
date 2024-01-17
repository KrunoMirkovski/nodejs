//* Object so podatoci

let domasna = {
  ime: "Krunislav",
  prezime: "Mirkovski",
  ovoshje: ["Jabolko", "Praska", "Kajsija", "Krusha"],
  zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
  vitamini: [
    { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
    { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
    { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
    { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
    { ime: "Domat", vitamin: "G", mineral: "Srebro" },
  ],
};

//* Prikazuvanje na objektot vo browser
const elements = (req, res) => {
  res.render("index", domasna);
};

//* Dodavanje na nov element vo tabela
const addingEl = (req, res) => {
  console.log(req.body);
  const newElement = {
    ime: req.body.ime,
    vitamin: req.body.vitamin,
    mineral: req.body.mineral,
  };
  domasna.vitamini.push(newElement);
  res.render("index", domasna);
};

//* Export na modulite
module.exports = {
  elements,
  addingEl,
};
