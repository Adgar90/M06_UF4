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
        titol: textTasca,
        completada: false
        }
        props.funcAfegirTasca(tascaNova);
        }
        
    return(
        <>
            <label htmlFor="">Afegeix tasca</label>
            <input type="text" onChange={canviTextTasca}/>
            <button  onClick={enviarForm}>Enviar</button>
        </>
    )
}

export default FormulariTasques;