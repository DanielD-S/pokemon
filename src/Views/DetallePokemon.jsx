import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DPokemon = () => {

  const [pokemon, setPokemon] = useState({})
  const [cargando, setCargando] = useState(true)

  const { Id } = useParams();

  const getPersonaje = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Id}`)
    const data = await res.json()

    console.log(data)
    setPokemon(data)
    setCargando(false)

  }
  useEffect(() => {
    getPersonaje()

  }, []);


  return (
    cargando ?
      <h1>Cargando Datos...</h1> :
    
      <div style={{background:'black', height:'87vh'}} className='detalleView'>
        <div>
          <h4 style={{color:'white'}}>Normal | Shiny </h4>
          <img src={pokemon.sprites.front_default} alt="Pokemon" />
          <img src={pokemon.sprites.front_shiny} alt="Pokemon_Shiny" />
          <div>
          <img src={pokemon.sprites.back_default} alt="Pokemon" />
          <img src={pokemon.sprites.back_shiny} alt="Pokemon_Shiny" />
          </div>
          
        </div>
        <div  style={{color:'white'}} className='datosPersonajes'>
          <p><strong>Nombre: </strong> <i>{pokemon.name}</i></p>
          {
               pokemon.types?.map(tipo => (
                  <p  key={tipo.type.name}><strong>Tipo:</strong> {tipo.type.name}
                  </p>
                ))
              }
              {
                pokemon.stats?.map(stat => (
                  <p key={stat.stat.name}>
                    {stat.stat.name}: <strong>{stat.base_stat}</strong>
                  </p>
                ))
              }
               
         
        </div>

      </div>


  )
}

export default DPokemon
