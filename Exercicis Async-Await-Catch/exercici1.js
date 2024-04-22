//Funció que comprova si n es divisible entre 2
async function esDivisible(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}

//Resultats
console.log("La funció esDivisible(2) retorna el següent resultat: ")
console.log(esDivisible(2))

console.log("La funció esDivisible(3) retorna el següent resultat: ")
console.log(esDivisible(3))