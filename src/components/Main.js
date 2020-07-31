import React, { useContext } from 'react';
import './Main.css'
import { Input } from './DraggableItems/Input/Input'
import { MovieContext } from '../components/context/maincontext';

const Main = () => {


    const [movies, setMovies] = useContext(MovieContext);

    console.log(movies)


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
                    <div className="playarea">
                        
                    </div>
                </div>
               
                <div className="components-list-container">
                    <div className="left-head">
                        <h3>Components List</h3>
                    </div>
                    <div className="components-list">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;