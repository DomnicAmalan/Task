import React from 'react';
import './input.css'
import PropTypes from 'prop-types';

const Input = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <input 
                type= {props.type}
                value={props.value}
                placeholder={props.placeholder}
                name={props.name}
            />
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