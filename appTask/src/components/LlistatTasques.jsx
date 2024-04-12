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
        const tasquesActuals = tasques.filter(tasca => tasca.id !== id)
        setTasques(tasquesActuals);
    }
    //Funció que mapeja l'array const i que actualitza l'estat de completada en la tasca
    //que la seva id sigui igual a la id que rep per paràmetre
    const completarTasca = id => {
        let tasquesActuals = tasques.map(tasca => {
            if (tasca.id == id) {
                tasca.completada == false ? tasca.completada = true : tasca.completada = false;
            }
            return tasca;
        })
        setTasques(tasquesActuals);
    }
    //Render del llistat de tasques amb el formulari per afegir de noves
    return(
        <>
            <h1>Llistat de tasques</h1>
            <FormulariTasques funcAfegirTasca={afegirTasca} idTasca={tasques.length == 0 ? 0 : (tasques[tasques.length-1]).id+1}/>
            {tasques.map(tasca => (
                <Tasca id={tasca.id} titol={tasca.titol} completada={tasca.completada} completarTasca={completarTasca} eliminarTasca={eliminarTasca}/>
            ))}
        </>
    )
}

export default LlistaTasques;