import React, { useContext, useState, useEffect } from 'react'
import {PostionContext} from '../context/maincontext'
import './button.css'


const Button = () => {
    const [counter, setCounter] = useState(0)

    const position = useContext(PostionContext);

    useEffect(() => {
        let element = document.getElementById("button-" + counter)
        element.style["top"] = position.y+"px"
        element.style["left"] = position.x+"px"
        setCounter(counter+1)
    }, [])

    return(
        <div id={"button-" + counter} className="button-div">
            <input type="button" />
        </div>
    )
}

export { Button }