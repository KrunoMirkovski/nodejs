const express = require("express");
const app = express();

app.get("/obrabotka/:name", (req, res) => {
  const name = req.params.name;
  if (!name) {
    res.send("not valid URL");
    return;
  }
  const numCharachters = name.length;
  const eParen = numCharachters % 2 === 0 ? "e paren" : "e neparen";
  const samoglaski = ["a", "e", "i", "o", "u"];

  let brojSamoglaski = 0;

  const bukvi = name.split("");

  for (let i = 0; i < name.length; i++) {
    const bukva = bukvi[i];
    if (samoglaski.includes(bukva)) {
      brojSamoglaski++;
    }
  }

  const brojSoglaski = numCharachters - brojSamoglaski;

  res.send(
    `Imeto ${name} sodrzi ${numCharachters} karakteri, brojot na bukvi vo zborot ${eParen}, sodrzi ${brojSamoglaski} samoglaski i ${brojSoglaski} soglaski`
  );
});

app.listen(11000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on 11000");
});
