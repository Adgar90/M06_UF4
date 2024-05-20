import { useState } from 'react';
import { Link, redirect } from 'react-router-dom'
import  db  from '../config/config.js'
import { collection, doc, setDoc } from "firebase/firestore";
import './styles/backbutton.css';
import './styles/form.css';
function MoviesAdd() {
    //Inicialització de la variable formData amb useState
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        directing: "",
        img: "",
        rating: "",
        year: "",
        duration: "",
    });
    //Funció per actualitzar l'estat del formData amb els valors dels inputs
    const actualitzaInputState = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    }
    //Funció asíncrona per afegir una pel·lícula a la Cloud FireStore
    const afegirMovie = async (e) => {
        e.preventDefault()
        const moviesRef = collection(db, "movies");
        await setDoc(doc(moviesRef), formData);
    }
    return (
        <>
         <form className="form" onSubmit={afegirMovie}>
            <div className="title">Benvingut</div>
            <div className="subtitle">Afegeix la teva pel·lícula!</div>
            <div className='grid-container'>

            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState} id="title" name="title" type="text" placeholder=" "/>
                <div class="cut"></div>
                <label className="placeholder" htmlFor='title'>Títol</label>

            </div>
            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState} id="description" name="description" type="text" placeholder=" "/><br />
                <div class="cut"></div>
                <label className="placeholder" htmlFor='description'>Descripció </label>
            </div>
            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState} id="directing" name="directing" type="text" placeholder=" "/><br />
                <div class="cut"></div> 
                <label className="placeholder" htmlFor='directing'>Direcció </label>
            </div>
            
            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState} id="img" name="img" type="url" placeholder=" "/><br />
                <div class="cut"></div> 
                <label className="placeholder" htmlFor='img'>Imatge </label>
            </div>
            
            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState} id="rating" name="rating" type="text" placeholder=" "/><br />
                <div class="cut"></div> 
                <label className="placeholder" htmlFor='rating'>Nota (1-5) </label>
            </div>
            
            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState} id="year" name="year" type="text" placeholder=" "/><br />
                <div class="cut"></div> 
                <label className="placeholder" htmlFor='year'>Any (ex: 2019) </label>
            </div>
            
            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState}  id="duration" name="duration" type="text" placeholder=" "/><br />
                <div class="cut"></div> 
                <label className="placeholder" htmlFor='duration'>Duració (min) </label>
            </div>
            
            <div class="input-container ic1">
                <input className="input" onChange={actualitzaInputState}  id="bg_img" name="bg_img" type="url" placeholder=" "/><br />
                <div class="cut"></div> 
                <label className="placeholder" htmlFor='bg_img'>Imatge de fons </label>
            </div>

            </div>
            <button className="submit" type="submit">Enviar</button>
         
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
            </form>
        </>
    )
}

export default MoviesAdd;