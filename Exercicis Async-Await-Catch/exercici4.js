//Funció que rep 2 nombres per paràmetre i retorna una
//promesa que calcula la divisió del primer entre el segon
async function divideix(dividend, divisor) {
    return new Promise((resolve, reject) => {
        if (dividend == 0 && divisor == 0) { reject(`${dividend} entre ${divisor} no dona un resultat definit`); }
        if (divisor == 0) { reject(`${dividend} no es pot dividir per ${divisor}`); }
        resolve(`El resultat de ${dividend} entre ${divisor} és ${dividend/divisor}`);
    })
}
//Divisió vàlida
divideix(10,2)
    .then(result => console.log(result))
    .catch(error => console.log(error));
//Divisió vàlida
divideix(0,2)
    .then(result => console.log(result))
    .catch(error => console.log(error));
//Divisió resultat no definit
divideix(0,0)
    .then(result => console.log(result))
    .catch(error => console.log(error));
//Divisió no es pot dividir entre 0
divideix(10,0)
    .then(result => console.log(result))
    .catch(error => console.log(error));
//asignant promise a variable
let resultat = divideix(0, 2);
console.log(resultat);