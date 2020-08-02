import React, { useEffect, useState, useContext } from 'react';
import './input.css'
import { PostionContext } from '../context/maincontext'

const Input = (props) => {

    const  {  position, counter }  = useContext(PostionContext);
    useEffect(() => {
        let element = document.getElementById("input-" + counter)
        element.style["top"] = position.y+"px"
        element.style["left"] = position.x+"px"
    }, [])



    return(
        <div id={"input-" + counter } className="input-div">
            <label>{props.label}</label>
            <input 
                type= {props.type}
                value={props.value}
                placeholder={props.placeholder}
                name={props.name}
            />
            <i className="fa fa-cog" aria-hidden="true" />
        </div>
    )
}

// Input.propTypes = {
//     type: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     value: PropTypes.instanceOf(type)
// };


export { Input };