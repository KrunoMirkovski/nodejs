//!Za domasna da se dodade uste eden modul so ime domasna.js koj kje ima funkcija da promeni faregajt vo celzius i obrantno

const celsius2farenheit = require ("./domashna");
console.log(celsius2farenheit.c2f(25))

const fahrenheit2celsius = require ("./domashna");
console.log(fahrenheit2celsius.f2c(95));

//! Da ima funkcija sto presmetuva plostina i perimetar na triagolnik

const plostTri = require("./domashna");
console.log(plostTri.plostinaTriagolnik(2,3));

const perTri = require("./domashna");
console.log(perTri.perimetarTriagolnik(2,3,5));

//! da ima funkcija sto presmetuva plostina i perimetar na pravoagolnik

const plostPrav = require("./domashna");
console.log(plostPrav.plostinaPravoagolnik(10,20));

const perPrav = require("./domashna");
console.log(perPrav.perimetarPravoagolnik(10,20));

//! Da ima funkcija sto proveruva dali nekoj broj e parel ili neparen

const proveriBroj = require("./domashna");
console.log(proveriBroj.checkNmber(3));
