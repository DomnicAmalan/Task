import React, { useEffect, useState } from 'react';
import './input.css'
import PropTypes from 'prop-types';

const Input = (props) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let element = document.getElementById("input-" + counter)
        
        element.style["top"] = props.y+"px"
        element.style["left"] = props.x+"px"
        setCounter(counter+1)
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