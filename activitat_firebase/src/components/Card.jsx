import { Link } from "react-router-dom";
import './styles/card.css';
function Card(props) {
    //Component Card que retorna una card amb les propietats que rep per props
    return (
        <>
            <Link to={props.link}>
                    <div className="article-card">
                        <div className="content">
                        <p className="title">{props.description}</p>
                        </div>
                        <img src={props.path}/>
                    </div>
            </Link>
        </>
    )
}

export default Card;

