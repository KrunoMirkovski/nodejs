const studenti = [
    { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
    { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
    { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
    { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
    { ime: "Simona", prosek: 7, grad: "Ohrid" },
    { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
    { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
    { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
    { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
  ];

  //! 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)

  // const SkopskiStudenti = studenti.filter(student => {
  //   return student.grad == "Skopje" && student.ime.endsWith("a") && student.prosek > 7;
  // });

  // console.log(SkopskiStudenti);

  //! 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki

  // const neSkopskiStudenti = studenti.filter(student => {
  //   return student.prosek > 9 && student.grad !== "Skopje";
  // });
  
  // const sortiraniNeSkopjani = neSkopskiStudenti.sort((a, b) => {
  //   return b.prosek - a.prosek;
  // })

  //   console.log(sortiraniNeSkopjani);

  //! 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek

  // const petKarakterniStudenti = studenti.filter(student => {
  //   return student.ime.length == 5;
  // });
  
  // const karakternoSortirani = petKarakterniStudenti.sort((a, b) => {
  //   return a.prosek - b.prosek;
  // });
  
  // const trojcaNajkarakterni = karakternoSortirani.slice(0, 3);
  
  // console.log(trojcaNajkarakterni);

  //! 4.Vkupen prosek na studenti koi se od Kumanovo

  // const kumanovci = studenti.filter(student => {
  //   return student.grad == "Kumanovo";
  // });
  
  // const vkupenProsek = kumanovci.reduce((sum, s) =>
  // sum + s.prosek, 0) / kumanovci.length;
  
  // console.log(vkupenProsek);

  //! 5. Prosek na prosecite od gradoovite Skopje i Ohrid
  
  // const filtriraniStudenti = studenti.filter(student => {
  //   return student.grad == "Skopje" || student.grad == "Ohrid";
  // });
  
  // const posebniProseci = filtriraniStudenti.map(student => student.prosek);
  
  // const vkupniProseci = posebniProseci.reduce((s, prosek) => {
  //   return s + prosek;
  // }, 0) / posebniProseci.length;
  
  // console.log(vkupniProseci);
  
  //! 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo

//   studenti.push({ ime: "Goran", prosek: 7.3, grad: "Delchevo" });

// console.log(studenti);

//! 7. Da se izbrishe prviot student vo studentite

// studenti.shift();

// console.log(studenti);

//! 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)

const novaNiza = studenti.map((student) => {
  if (student.grad === "Ohrid" || student.grad === "Kumanovo") {
    return { ...student, prosek: student.prosek + 1};
  }
  return student;
});

console.log(novaNiza);


