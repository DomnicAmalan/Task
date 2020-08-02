import React, { useContext, Component, useState, useMemo, useCallback, useEffect } from 'react';
import './Main.css'
import { Input } from './DraggableItems/Input/Input'
import { MovieContext } from '../components/context/maincontext';
import { transform, set } from 'lodash';
import styled from 'styled-components'
import Draggable from './DraggableItems/Draggable';

const Main = () => {

    const componets_list = [{ "name": "Input Type", "componentdata":<Input />}]
    const [ playareaComponents, setComponents ] = useState([])
    const [ positioning, setPositioning ] = useState("relative")


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
        let render = <Input x={ev.pageX} y={ev.pageY} id={id}/>
        
        setComponents(playareaComponents => [...playareaComponents, render])      

    }

    const PlayAreaRender = () => {
        let value = []
        playareaComponents.forEach((element, idx) => {
            value.push(
                <div id={"ele-" + idx} draggable className="ui-components" >
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
                        {PlayAreaRender()}
                    </div>
                </div>
               
                <div className="components-list-container">
                    <div className="left-head">
                        <h3>Components List</h3>
                    </div>
                    <div className="components-list">
                        <ComponentList componets_list={componets_list} Drag = {onDragStart}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const ComponentList = (props) => {

    const ComponentsRender = () => {
        let value = []
        props.componets_list.forEach((element, idx) => {
            value.push(
                <ul draggable onDragStart={(e) => props.Drag(e, idx, 'external')}> 
                    <li className="test" id={"drag-me" + idx} key={"components-list-min" + idx}>{element.name}</li>
                </ul>
            )
            
        });
        return value
    }
    

    return(
        <>
            {ComponentsRender()}
        </>
    )
}

export default Main;