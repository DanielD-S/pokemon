import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {

  const [idPokemon, setIdPokemon] = useState("");
const [listaPokemon,setListaPokemon] = useState([]);
const navigate = useNavigate();
  const getPokemon = async () =>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json();
  
    let dataSelect = [];
    data.results.map((personaje)=>{
      dataSelect.push({url:personaje.url, nombre:personaje.name});
    })
    setListaPokemon(dataSelect);
    console.log(dataSelect)
  }

  const verDetalle =() =>{
    
    let Id = idPokemon.replace('https://pokeapi.co/api/v2/pokemon/','')
    console.log(Id)
    Id = Id.replace('/','')
   navigate(`/pokemon/${Id}`);
   
  }


  useEffect(()=>{
   getPokemon();
  },[]);


  return (
    <div style={{background:'black', height:'87vh'}} className='PokemonView'>
      <h1 style={{color:'white'}} >Selecciona un Pokemon</h1>
      <select name='id' id='id' onChange={(e) => setIdPokemon(e.target.value)}>}
        <option value="">Seleccione Pokemon</option>
            {
              listaPokemon.map((p)=> <option key={p.url} value={p.url}>{p.nombre}</option>)
            }
      </select>
    <Button style={{margin:'10px'}}variant='primary' onClick={(e) => verDetalle()}>Ver Detalle</Button>
    </div>
  )
}

export default Pokemon