import React from 'react'
import {connect} from 'react-redux'

const Card = (props) => {
    console.log(props)
    if(props.name===''){
        return(
            <h1>Welcome</h1>
        )
    }else{
    return(
        <div className='card'>
            <img src={props.picture} alt='pokemon'/>
            <div className='text'>
                <p>Name: {props.name}</p>
                <p>Height: {props.height}</p>
                <p>Weight: {props.weight}</p>
                <p>Type: {props.types} {props.secondType}</p>
                <p>Pokemon Number: {props.pokemonNumber}</p>
            </div>
        </div>

    )
    }
}
const mapStateToProps = state =>{
  
    return state
}

export default connect(mapStateToProps, {})(Card)