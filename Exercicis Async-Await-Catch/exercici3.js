
//Funció que retorna una promesa que calcula si una lletra està
//dins d'un array donat
async function esVocal(lletra) {
    //array de vocals
    let vocals = ['a','e','i','o','u'];
    return new Promise((resolve, reject) => {
        if (lletra.length > 1) { reject("Ha de ser només un carácter"); }
        vocals.forEach( vocal => {
            if (lletra == vocal) { resolve(`${lletra} és una vocal`); }
        })
        reject(`${lletra} no és una vocal`);
    })
}
//Prova amb vocal
esVocal('e')
    .then(result => console.log(result))
    .catch(error => console.log(error));
//Prova amb consonant
esVocal('l')
    .then(result => console.log(result))
    .catch(error => console.log(error));
//Prova amb string amb més d'un caràcter
esVocal('eaa2')
    .then(result => console.log(result))
    .catch(error => console.log(error));