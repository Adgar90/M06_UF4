import React from "react";
import { Routes, Route } from "react-router-dom"
import Salutacio from './Welcome'
import MovieList from './MovieList'
import MoviesAdd from "./MoviesAdd";


function App() {
  //App on es troben definides les rutes de la nostra aplicació i els components que es criden per cada ruta
  return (
    <>
      <Routes>
        <Route path="/" element={ <Salutacio username="Adria"/> } />
        <Route path="/movies/list" element={ <MovieList /> } />
        <Route path="/movies/add" element={ <MoviesAdd /> } />
      </Routes>
    </>
  )
}

export default App
