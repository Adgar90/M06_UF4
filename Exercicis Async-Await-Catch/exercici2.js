//Funció que comprova asíncronament si el paràmetre passat es major o igual a 0 i menor o igual a 10
async function majorMenorIgual(n) {
    return new Promise((resolve, reject) => {
        if (n < 0 || n > 10) reject(n<0? "No pot ser menor a 0":"No pot ser major a 10");
        if (n < 10) {
            if (n > 0){ 
                resolve(`${n} és major a 0 i menor que 10`);
            }
            resolve("És igual a 0");
        }
        resolve("És igual a 10");
    })
}

//menor que 0 (reject)
majorMenorIgual(-3)
    .then(result => console.log(result))
    .catch(error => console.log(error));
//igual a 0 (resolve)
majorMenorIgual(0)
.then(result => console.log(result))
.catch(error => console.log(error));
//entre 0 i 10 (resolve)
majorMenorIgual(5)
.then(result => console.log(result))
.catch(error => console.log(error));
//igual a 10 (resolve)
majorMenorIgual(10)
.then(result => console.log(result))
.catch(error => console.log(error));
//major a 10 (reject)
majorMenorIgual(13)
.then(result => console.log(result))
.catch(error => console.log(error));