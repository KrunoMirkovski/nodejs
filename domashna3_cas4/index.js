//? Da istrazite uste nekolku methodi na fs modulot

// 1. fs.readFile (path, callback) - go cita fajlot;
// 2. fs.writeFile (file, data, callback) - pisuva podatoci vo fajlot, i go modificira;
// 3. fs.appendFile (file, data, callback) - dodava/prilozuva podatoci vo fajlot;
// 4. fs.mkdir (path, callback) - kreira direktorium;
// 5. fs.readdir (path, callback) - cita sodrzina od direktorium;
// 6. fs.rmdir (path,callback) - brise prazen direktorium;
// 7. fs.unlink(path, callback) - brise fajl;
// 8. fs.stat(path,callback) - vadi informacii za fajlot ili za direktoriumot;
// 9. fs.rename(oldPath, newPath, callback) - preimenuva fajl;
// 10. fs.chmod(path, mode, callback) - menuva dozvoli za fajl;
// 11. fs.createReadStream (path) - kreira stream za citanje na podatocite od fajl;
// 12. fs. fs.watch (filename) - gleda dali ima promeni vo fajlot i vo direktoriumot;

//? Kako da izbrishite fajl
const fs = require("fs");

const file1 = 'Lorem ipsum dolor sit amet, consectetur dolore magna aliqua.'
fs.writeFileSync("./file1.txt", file1);

fs.unlink ('./file1', (err) => {
    if (err) 
        console.log('ERROR');
    console.log("fajlot e izbrisan");
});

//? kako da preimenuvate fajl

fs.rename('file1.txt', 'newfile1.txt', () => console.log('file renamed'));

//? i uste eden metod po zelba

fs.appendFile('newfile1.txt', 'dopolnuvanje na fajlot so nov tekst', (err) => {
    if (err) throw err;
    console.log('Saved!');
  }); 

//? isto taka da kreirate fajl

const novFile = "Kreiranje na nov fajl so asihron metod"
fs.writeFile("./novFile.txt", novFile, "utf-8", (err) => {
    if(err) {
        return console.log('Error');
    }
    console.log('Noviot fajl e uspesno kreiran');
})

//? i da prochitate fajl

fs.readFile("./novFile.txt", "utf-8", (err,text) => {
    if(err) {
        return console.log("Error");
    }
    console.log(text);
})