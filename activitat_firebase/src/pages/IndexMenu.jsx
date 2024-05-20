import Card from '../components/Card';
import addMoviePng from '../img/addmovie1.png';
import movies from '../img/movies1.png';
function IndexMenu() {
    //LandPage que indexa dues Cards linkades a les rutes inicials de la nostre APP
    return (
        <>
            <div className="center">
                <Card link="/movies/list" description="Llistat de pel·lícules" path={movies}></Card><br />
                <Card link="/movies/add" description="Afegeix una pel·lícula" path={addMoviePng}></Card>
            </div>
        </>
    )
}

export default IndexMenu;