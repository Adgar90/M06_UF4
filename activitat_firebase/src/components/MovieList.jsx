import { Link } from 'react-router-dom'
import { collection, query, getDocs, deleteDoc, doc, } from "firebase/firestore";
import { useEffect, useState } from 'react';
import  db  from '../config/config.js'
import './styles/backbutton.css';
import MovieCard from './MovieCard.jsx';

function MovieList() {
    const [movies, setMovies] = useState([])
    //useEffect on es troba definida una funció asíncrona per connectar amb la BD i carregar les dades de la collection 'movies'
    useEffect(() => {
        const loadData = async () => {
            console.log(db)
            let dades = [];
            const moviesRef = collection(db, "movies");
            const q = query(moviesRef); 
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((movie) => {
                dades.push({"id":movie.id, "data":movie.data()});
            })
            setMovies(dades);
            };
            loadData();
        }
        ,[]);
        //Funció que ens permet esborrar una movie de la BD i recarrega la view de la llista de pel·lícules
        const deleteMovie = async (id) => {
            await deleteDoc(doc(db, 'movies', id))
            location.reload();
        }
    return (
        <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        {//map per recorrer l'array de movies i retornar una MovieCard amb les propietats de cada movie
        movies.map((movie) => {
            return (
                <MovieCard title={movie.data.title} description={movie.data.description} image={movie.data.img} rating={movie.data.rating} directing={movie.data.directing} year={movie.data.year} duration={movie.data.duration} bg_img={movie.data.bg_img} id={movie.id} deleteMovie={deleteMovie}/>
            )
        })}
            <Link to="/">
            <button class="button">
            
                <div class="button-box">
                    <span class="button-elem">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                    </svg>
                    </span>
                    <span class="button-elem">
                    <svg viewBox="0 0 46 40">
                        <path
                        d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                    </svg>
                    </span>
                    
                </div>
            </button>
            </Link>
        </>
    )
}

export default MovieList;