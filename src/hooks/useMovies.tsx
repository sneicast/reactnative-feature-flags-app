import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDb'
import { MovieDbNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

    const getMovies = async () => {
        console.log('Entro')
        //const resp = await movieDB.get<MovieDbNowPlaying>('/now_playing');
        //setPeliculasEnCine(resp.data.results);
        movieDB.get<MovieDbNowPlaying>('/now_playing').then((response) => {
            setPeliculasEnCine(response.data.results);
            setIsLoading(false);
            console.log('Finalizo ok')
        }).catch((err) => {
            setIsLoading(false);
            console.log('Finalizo con error');
        })


        console.log('Finalizo metodo getMovies')
    }
    useEffect(() => {
        getMovies();
        console.log('Entro useEffect')
    }, [])
    return {
        peliculasEnCine,
        isLoading
    }
}
