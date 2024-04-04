/* Component 'Button' que rep per props un booleà per saber si
   és botó per incrementar o per reiniciar el comptador i la
   funció predeterminada en cada cas.
*/
function Button(props) {
    // Variables per mostrar clean-code a l'hora de renderitzar l'element button
    let btnClass = props.esClick == true ? "btnClick" : "btnReiniciar";
    let btnFunction = props.onclick;
    let value = props.esClick == true ? "Click" : "Reiniciar";
    //Renderització del botó
    return (
        <>  
            <button className={btnClass} onClick={btnFunction}>{value}</button>
        </>
    );
}

export default Button;