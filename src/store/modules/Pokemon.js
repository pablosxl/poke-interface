import {
    SET_POKEMON_NAME,
} from '../mutation-types'

export default {
    namespaced: true,

    state: {
        pokemonName: undefined,
    },
    mutations: {
        [SET_POKEMON_NAME]: (state, newPokemonName) => {
            state.pokemonName = newPokemonName
        }
    },
    actions: {
        //Actions que commitam mutations
        setPokemonName({ commit }, pokemonName){
            commit(SET_POKEMON_NAME, pokemonName);
        }
    }
}