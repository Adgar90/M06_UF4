import {useState} from 'react';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca';
function LlistaTasques() {
    const [tasques, setTasques] = useState([]);
    
    const afegirTasca = tasca => {
        const tasquesActuals = [...tasques, tasca];
        setTasques(tasquesActuals);
    }
    const eliminarTasca = id => {
        const tasquesActuals = tasques.splice(tasques[id]);
        setTasques(tasquesActuals);
    }
    const completarTasca = id => {
        tasques[id].completada == true ? tasques[id].completada = false : tasca.completada = true;
        setTasques(tasques);
    }
    return(
        <>
            <h1>Llistat de tasques</h1>
            <FormulariTasques funcAfegirTasca={afegirTasca}/>
            {tasques.map((tasca )=> (
                <Tasca titol={tasca.titol}/>
            ))}
        </>
    )
}

export default LlistaTasques;