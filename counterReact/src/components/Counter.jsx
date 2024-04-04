//Import de Button per fer servir el component
import Button from './Button';
//Import de useState per inicialitzar una variable amb estat
import { useState } from "react";

/* Component Counter que consta d'una variable (numClics) i el
   seu hook (setNumClics) per actualitzar el seu estat.

   També consta de dos arrow functions (=>) que passem als
   components Button com a props per la seva utilització, juntament
   amb un booleà per saber de quin tipus de Button es tracta.
*/
function Counter() {
    //Variable numClics amb hook que definim amb un estat de valor inicial 0
    const [ numClics, setNumClics ] = useState(0);
    
    //Function arrow que incrementa el número de clics i els mostra per consola
    const incrementNum = () => {
      let clicsTotals = numClics+1;
      setNumClics(clicsTotals);
      console.log(clicsTotals);
    }
    //Function arrow que reinicia el número de clics i els mostra per consola
    const reiniciarNum = () => {
        let clicsTotals = 0;
        setNumClics(clicsTotals);
        console.log(clicsTotals);
    }
    //Renderització del comptador amb els botons
    return (
        <>
            <div className='comptador'>
                <h1>{numClics}</h1>
            </div>
            <div>
                <Button esClick={true} onclick={incrementNum}/>
                <Button esClick={false} onclick={reiniciarNum}/>
            </div>
        </>
    );
    
  }
  
  export default Counter