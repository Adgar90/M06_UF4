
import './styles/list.css';

function MovieCard(props) {
    
    let  { title, description, image, rating, directing, year, duration, bg_img} = props;
    let bg_style = {
        backgroundImage: `url(${bg_img})`,
    }
    //Definició de funció per cridar la funció que rep la MovieCard per props
    const remove = (e) => {
        props.deleteMovie(props.id);
        console.log(props.id);
    }
    return (
        <>
        <div className="movie_card box_shadow">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={image} alt={`Imatge de portada de la pel·lícula ${title}`}/>
                    <h1>{title}</h1>
                    <h4>{year}, {directing}</h4>
                    <span className="minutes">{duration}<i id="timer" className="material-icons">timer</i></span>
                    <span className="minutes">{rating}<i id="star" className="material-icons">star</i></span>
                    </div>
                    <div className="movie_desc">
                    <p className="text">
                    {description}
                    </p>
                </div>
                <div className="movie_social">
                    <ul>
                        <li><i className="material-icons">share</i></li>
                        <li><i className="material-icons"></i></li>
                        <li><i className="material-icons">chat_bubble</i></li>
                        <li><i onClick={remove} className='material-icons'>delete</i></li>
                    </ul>
                </div>
            </div>
            <div className="blur_back img_back" style={bg_style}></div>
        </div>
            
        </>
    )
}

export default MovieCard;