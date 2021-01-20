import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Card from './card'
import { fetchPokemon } from '../actions'

 const Home = ({fetchPokemon}) => {
    useEffect(() => {
        fetchPokemon();
      }, [fetchPokemon]);

const[number, setNumber] = useState('')

    return(
        <div className='home'>
            <div className='header'>
                <h1>Pokemon Research</h1>
                <div>
                    <input type='text' placeHolder=' from 1 to 898' onChange={e => setNumber(e.target.value)}></input>
                    <button onClick={()=>fetchPokemon(number)}>click here</button>  
                </div>               
            </div>
            <Card />
        </div>
    )
}

const mapStateToProps = state =>{
    return state
}
const mapDispatchToProps = {fetchPokemon}

export default connect(mapStateToProps, mapDispatchToProps)(Home)