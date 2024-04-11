import {useState} from 'react';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca';
function LlistaTasques() {
    const [tasques, setTasques] = useState([]);
    
    //Funció que concatena una tasca a l'array de tasques i actualitza el seu estat
    const afegirTasca = tasca => {
        const tasquesActuals = [...tasques, tasca];
        setTasques(tasquesActuals);
    }
    //Funció que filtra les tasques segons el seu index i que retorna qualsevol element diferent
    //a la id que rep per paràmetre per després actualitzar el seu estat
    const eliminarTasca = id => {
        const tasquesActuals = tasques.filter((never, index) =>  index !== id)
        setTasques(tasquesActuals);
    }
    //Funció que actualitza la propietat completada de la tasca i després l'estat de totes
    const completarTasca = id => {
        tasques[id].completada = tasques[id].completada == true ? false : true;
        setTasques(tasques);
    }
    //Render del llistat de tasques amb el formulari per afegir de noves
    return(
        <>
            <h1>Llistat de tasques</h1>
            <FormulariTasques funcAfegirTasca={afegirTasca}/>
            {tasques.map((tasca, index )=> (
                <Tasca id={index} titol={tasca.titol} completada={tasca.completada} completarTasca={completarTasca} eliminarTasca={eliminarTasca}/>
            ))}
        </>
    )
}

export default LlistaTasques;