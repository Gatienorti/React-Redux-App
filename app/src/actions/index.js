import axios from 'axios'

export const fetchPokemon = (id) => dispatch =>{
    dispatch({type:'FETCH_POKEMON_START'}) 
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
     .then(res =>{
         dispatch({ type:'FETCH_POKEMON_SUCCESS', payload: res.data})
         console.log(res.data)
     })
     .catch(err => {
        dispatch({ type: "FETCHING_POKEMON_FAIL", payload: err })
        console.log(err);
      })
}