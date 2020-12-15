import React, {useEffect, useState} from "react"
import axios from "axios";

import authHeader from "../../services/auth-header";

const PokemonWidget = () => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokemon, setPokemon] = useState({
        id: 0,
        name: "",
        sprites: {
            front_default: ""
        },
        types: []
    })


    useEffect(() => {
        getPokemonInfo("ditto") // TODO: user default a mettre
        getPokemonList()
    }, ([]))

    const getPokemonInfo = (pokemonName) => {
        console.log(pokemonName)
        if (pokemonName.length === 0) return
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, { headers: authHeader() })
            .then(res => {
                console.log(res.data)
                const pokemonData = res.data;
                if (pokemonData.sprites !== null) {
                    setPokemon({...pokemonData});
                }
            }).catch(error => {
            console.log("error:", error)
        })
    }

    const getPokemonList = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151", { headers: authHeader() })
            .then(res => {
                console.log(res.data.result)
                setPokemonList(res.data.results)
            }).catch(error => {
            console.log("error:", error)
        })
    }

    return (
        <div>
            <input onChange={(event) => getPokemonInfo(event.target.value)} list="pokemonList" name="pokemonList"/>

            <datalist id="pokemonList">
                {pokemonList.map(pokemon => {
                    return (
                        <option value={pokemon.name}/>
                    )
                })}
            </datalist>

            <h4>{pokemon.id} - {pokemon.name}</h4>
            <div className="container">
                <img src={pokemon.sprites.front_default} alt="Pokemon Front"/>
                <img src={pokemon.sprites.front_shiny} alt="Pokemon Front Shiny"/>
            </div>
            <p className="types">
                {pokemon.types.map(type => {
                    return (<span className={type.type.name}>
                        {type.type.name}
                    </span>)
                })}
            </p>
        </div>
    )
}

export default PokemonWidget;
