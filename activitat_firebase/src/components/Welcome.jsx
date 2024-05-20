import IndexMenu from "../pages/IndexMenu";
import './styles/welcome.css';
function Salutacio(props) {
    //Component Welcome que mostra un títol i la nostra view principal (IndexMenu)
    return (
        <>  
            <section class="text">
                <h3 id="subtitle">Pel·lícules per a l'estiu</h3>
                <h1 id="main-title"><span class="fontawesome-star star"></span> <span>BENVINGUT {props.username}</span> <span class="fontawesome-star star"></span></h1>
            </section>
            <IndexMenu />
        </>
    )
}

export default Salutacio;