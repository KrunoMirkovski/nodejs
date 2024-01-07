//? Servis koj kje obrabotuva ruti od sledniot tip
// ime/aleksandar
// /ime/krunislav
// parno: da, karakteri 5, soglaski: 2, samoglaski

//* Povikuvanje na http modulot
const http = require("http");

//* Kreiranje na server
const server = http.createServer((req, res) => {
  //pravime destrukcija na url i proveruvame dali funkcionira
  const [_, path, name] = req.url.split("/");
  console.log(path, name);
  //Za da ne pagja serverot vo slucaj da nemame pisano ime vo URL
  if (!name) {
    res.end("Invalid URL");
    return;
  }
  //ova e urnek za da znae aplikacijata prema sto da se orientira, spored sto ke filtrirame (samoglaski)
  const samoglaski = ["a", "e", "i", "o", "u"];
  //Kolku bukvi ima imeto(task 1)
  const brojNabukvi = name.length;
  //Dali zborot ima paren ili neparen broj na bukvi (task 2)
  const eParen = brojNabukvi % 2 === 0 ? "paren" : "neparen";
  //Kolku samoglaski ima zborot (task 3)
  let samoglaskiBroj = 0;
  //destrukcija na imeto, za da moze sekoja bukva da ja odelime kako zaseben element
  const bukviArray = name.split("");

  for (let i = 0; i < bukviArray.length; i++) {
    if (samoglaski.includes(bukviArray[i])) {
      samoglaskiBroj++;
    }
  }
  //Kolku soglaski ima zborot (task 4)
  const soglaskiBroj = brojNabukvi - samoglaskiBroj;
  //Prikazuvanje na rezultatite
  res.end(
    `Imeto sodrzi ${brojNabukvi} karakteri, brojot na bukvi vo imeto e ${eParen}, ima vkupno ${samoglaskiBroj} samoglaski, i ima ${soglaskiBroj} soglaski`
  );
});
//* Kreiranje listener na odredena porta
server.listen(10000, "127.0.0.1", (err) => {
  if (err) console.log(err);
  console.log("Server started successfully");
});
