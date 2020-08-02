import React, { useContext, Component, useState, useMemo, useCallback, useEffect } from 'react';
import './Main.css'
import { Input } from './DraggableItems/Input';
import { Button } from './DraggableItems/Button'
import {PostionContext} from './context/maincontext'
const Main = () => {

    const componets_list = [
        { "name": "Input", "componentdata":<Input />}, 
        {"name": "Button", "componentdata": <Button />}
    ]
    const [ playareaComponents, setComponents ] = useState([])
    const [ playareaComponentsConfig, setPlayareaComponentsConfig] = useState([])
    const [ counter, setCounter ] = useState(0)
    const [showList, setList] = useState(true);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })



    const onDragStart = (event, id, type) => {
        event.dataTransfer.setData("id", id);
        event.dataTransfer.setData("type", type)
    }

    const onDragOver = (ev) => {
        ev.preventDefault();
    }

    const onDrop = (ev) => {
        ev.preventDefault();
        let id = ev.dataTransfer.getData("id");
        let type = ev.dataTransfer.getData("type");
        
        let render = componets_list[id]["componentdata"]
        setPlayareaComponentsConfig(playareaComponentsConfig => [...playareaComponentsConfig, position])
        
        if(type == 'external'){
            let element = document.getElementById("drag-me"+id)
            const rect = element.getBoundingClientRect();
            let position = {x: ev.pageX - rect.left, y: ev.pageY - rect.top}
            setCounter(counter+1)
            setPosition(position)
            setComponents(playareaComponents => [...playareaComponents, render]);
            
        }
        else if(type == 'internal'){
            let element = document.getElementById("dragged-"+id)
            const rect = element.getBoundingClientRect();
            let position = {x: ev.pageX - rect.left, y: ev.pageY - rect.top}
            setPosition(position)
        }
    }
 
    const PlayAreaRender = () => {
        let value = []
        playareaComponents.forEach((element, idx) => {
            value.push(
                <div id={"dragged-" + idx} draggable className="ui-components" onDragStart={(e) => onDragStart(e, idx, 'internal')}>
                    {element}
                </div>
            )
        })
        return value
    }


    return(
        <>
            <header>
                <div className="heading">
                    <h1>GUI</h1>
                </div>
            </header>
            <div className="main">
                <div className="playarea-container">
                        <h3>Playarea</h3>
                    <div className="playarea" onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>{onDrop(e)}} >
                        <PostionContext.Provider value={{position, counter, playareaComponentsConfig}} >
                            {PlayAreaRender()}
                        </PostionContext.Provider>
                    </div>
                </div>
               
                <div className="components-list-container">
                    <div className="left-head">
                        <h3>Components List</h3>
                        <p onClick={() => setList(!showList)}>{showList ? "hide": "show"}</p>
                    </div>
                </div>
                
                {showList ? 
                    
                        <ComponentList componets_list={componets_list} Drag = {onDragStart}/>
                    : ""
                }
                
            </div>
        </>
    )
}

const ComponentList = (props) => {

    const ComponentsRender = () => {
        let value = []
        props.componets_list.forEach((element, idx) => {
            value.push(
                    <li className="test" draggable onDragStart={(e) => props.Drag(e, idx, 'external')} id={"drag-me" + idx} key={"components-list-min" + idx}>{element.name}</li>
            )
            
        });
        return value
    }
    

    return(
        <div className="component-element-list">
            <ul className="list-components"> 
                {ComponentsRender()}
            </ul>
        </div>
    )
}

export default Main;