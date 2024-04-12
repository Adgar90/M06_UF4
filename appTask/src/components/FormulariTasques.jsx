import {useState} from 'react';


function FormulariTasques(props) {
    const [textTasca, setTextTasca] = useState("");

    const canviTextTasca = e => {
        setTextTasca(e.target.value);
        console.log('value is:', e.target.value);
    };

    const enviarForm = e => {
        e.preventDefault();
        const tascaNova= {
        id: props.idTasca,
        titol: textTasca,
        completada: false
        }
        //Comprovació per evitar afegir amb empties
        if (tascaNova.titol != "") { 
            props.funcAfegirTasca(tascaNova);
        }
    }
    //Render del formulari
    return(
        <>
            <label>Afegeix tasca</label>
            <input type="text" onChange={canviTextTasca}/>
            <button  onClick={enviarForm}>Enviar</button>
        </>
    )
}

export default FormulariTasques;