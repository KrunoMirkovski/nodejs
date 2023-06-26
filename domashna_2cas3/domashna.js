//kje ima funkcija da promeni faregajt vo celzius i obrantno

const c2f = (celsius) => celsius * 1.8 +32;
const f2c = (fahrenheit) => (fahrenheit -32) * 0.556;


// Da ima funkcija sto presmetuva plostina i perimetar na triagolnik

const plostinaTriagolnik = (osnova,visina) => {
    return (osnova * visina) / 2;
};

const perimetarTriagolnik = (a,b,c) => {
    return (a+b+c);
};


// Da ima funkcija sto presmetuva plostina i perimetar na triagolnik

const plostinaPravoagolnik = (sirina,visina) => {
    return  (sirina * visina);
};

const perimetarPravoagolnik = (sirina,visina) => {
    return (2 * (sirina + visina));
};


//Da ima funkcija sto proveruva dali nekoj broj e paren ili neparen

const checkNmber = (num) => {
    if (num % 2 === 0) {
        return "paren";
    } else {
        return "neparen"
    }
};


//!Exports

module.exports = {
    c2f,
    f2c,
    plostinaTriagolnik,
    perimetarTriagolnik,
    plostinaPravoagolnik,
    perimetarPravoagolnik,
    checkNmber
}
