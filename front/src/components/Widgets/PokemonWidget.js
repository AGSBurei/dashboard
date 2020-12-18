import React, {useEffect, useState} from "react"
import Axios from "axios";

import authHeader from "../../services/auth-header";
import param from "../../param";

const PokemonWidget = ({widget = {}, saveParams}) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokemon, setPokemon] = useState({
        id: 0,
        name: "",
        sprites: {
            front_default: "",
            front_shiny: "",
        },
        types: []
    })

    useEffect(() => {
        getPokemonList()
    }, []);

    const getPokemonInfo = (pokemonName) => {
        if (pokemonName.length === 0) return;
        Axios.get(param.pokemon + `?pokemon=${pokemonName}`, {headers: authHeader()})
            .then(res => {
                const pokemonData = res.data;
                console.log(res.data);
                if (pokemonData.sprites !== null && pokemonData.sprites.front_default !== null) {
                    setPokemon({...pokemonData});
                    savePokemonParam(pokemonName)
                }
            }).catch(error => {
            console.log("error:", error)
        })
    };

    const getPokemonList = () => {
        Axios.get(param.pokemonList, {headers: authHeader()})
            .then(res => {
                setPokemonList(res.data.results);
                getInitialPokemonInfo(res.data.results)
            }).catch(error => {
            console.log("error pokemonList:", error)
        })
    };

    const getInitialPokemonInfo = (pokemons) => {
        if (widget.params !== undefined &&
            widget.params !== null &&
            widget.params.pokemon !== null &&
            widget.params.pokemon !== undefined) {
            getPokemonInfo(widget.params.pokemon)
        } else {
            // Random pokemon
            const index = Math.floor(Math.random() * pokemons.length)
            const pokemonName = pokemons[index].name
            getPokemonInfo(pokemonName);
        }
    }

    const savePokemonParam = (pokemonName) => {
        saveParams({
            ...widget,
            params: {
                pokemon: pokemonName
            }
        })
    }

    return (
        <div>
            <input onChange={(event) => getPokemonInfo(event.target.value)} list="pokemonList" name="pokemonList"/>

            <datalist id="pokemonList">
                {pokemonList.map(pokemon => {
                    return (
                        <option key={pokemon.name} value={pokemon.name}/>
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
                    return (<span key={type.type.name} className={type.type.name}>
                        {type.type.name}
                    </span>)
                })}
            </p>
        </div>
    )
}

export default PokemonWidget;
