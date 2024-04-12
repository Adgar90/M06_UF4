import { BiSolidTrashAlt } from "react-icons/bi";
import { useState } from 'react';


function Tasca(props) {
    //Constant que crida la funció eliminarTasca la qual rep per props
    const esborrar = e => {
        e.preventDefault();
        props.eliminarTasca(props.id);
    }
    //Constant que crida la funció completarTasca la qual rep per props
    const completar = e => {
        props.completarTasca(props.id);
        //Ternaria per comprovar el className del target i actualitzar el seu estat segons el valor que rep

    }
    //Render de la tasca
    return (
        <>
        <div>
            <span id={props.id} onClick={completar} className={props.completada == true ? "tascaCompletada" : ""}>{props.titol}</span>
            <button onClick={esborrar}><BiSolidTrashAlt /></button>
        </div>
        </>
    )
}

export default Tasca;