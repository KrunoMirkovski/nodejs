//? Student ime prezime prosek grad
//? Dodavanja student vo fajlot
//? Brishenje na student od fajlot
//? Menuvanje na podatoci na student od fajlot
//? Chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vcitate celata sodrzina of fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/ JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da e konvertirana vo tekst | JSTON.stringify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imeto na studentot treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertira sodrzinata od obichniot tekst vo js niza ili objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da she izbrtishe studen od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot
//? 2. Da ja konvertirate sodrzinata od obicen tekst vo js niza
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite soodvetniot clen | Array,filter
//? 4. Nizata od js treba da bidde konvertirana vo tekst
//? 5. Tekstot treba da bide zachuvan vo fajlot

//? 1. Dodavanje na student

const modul = require("./studentfunc.js");

const addStudent = async () => {
  try {
    //vcituvanje na niza
    const dataString = await modul.fileRead("studenti.json", "utf8");
    let studentsData = JSON.parse(dataString);

    //dodavanje nov objekt vo niza
    const novStudent = { ime: "Vase", grad: "Debar", prosek: 8.7 };
    studentsData.push(novStudent);

    //zacuvuvanje na objekt vo niza
    await modul.fileWrite("studenti.json", JSON.stringify(studentsData));

    console.log("Uspesno dodadovte nov student");
  } catch (err) {
    console.log("Greska pri dodavanje na studentot: ", err);
  }
};
addStudent();

// //? 2.Brisenje na student

const deleteStudent = async () => {
  try {
    const dataString = await modul.fileRead("studenti.json");
    let studentsData = JSON.parse(dataString);

    //listanje na site elementi i brisenje na student
    studentsData.filter((student) => student.ime !== "Vase");

    //Zacuvuvanje na tekst vo fajl
    await modul.fileWrite("studenti.json", JSON.stringify(studentsData));

    console.log("Studentot e izbrisan");
  } catch (err) {
    console.log("Greshka pri brisenje na studentot: ", err);
  }
};
deleteStudent();

// //? 3.Menuvanje na podatoci na student od fajlot

const changeName = async () => {
  try {
    //vcituvanje na niza
    const dataString = await modul.fileRead("studenti.json");
    let studentsData = JSON.parse(dataString);

    //Menuvanje podatoci na soodvetniot student

    const updatedArr = studentsData.map((student) => {
      if (student.ime == "Vase") {
        return { ...student, ime: "Sanja" };
      }
      return student;
    });
    console.log(updatedArr);
    //Zacuvuvanje na noviot objekt vo nizata
    await modul.fileWrite("studenti.json", JSON.stringify(studentsData));

    console.log("Array was updated successfully.");
  } catch (err) {
    console.log(err);
  }
};
changeName();

//  //? Chitanje na site studenti od fajlot
const allStudent = async () => {
  try {
    //Vcituvanje na celata niza
    const result = await modul.fileRead("studenti.json");
    let jsonData = JSON.parse(result);
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
};
allStudent();
