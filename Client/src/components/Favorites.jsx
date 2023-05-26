import { useEffect } from "react";
import Card from "./Card";
import "./Favorites.css"

import {useDispatch, useSelector}  from "react-redux";



export default function Favorites(props) {

    
   const myFavorites = useSelector((state)=>state.myFavorites)


    return (
      <div className="favorites">
        <h2 className='tituloCards'>Favorites characters</h2>
        {
               myFavorites.length>0? (
                <div className='cards'>
                    {myFavorites.map((personaje)=>
                    <Card
                    key={personaje.id}
                    id={personaje.id}
                    name={personaje.name}
                    status={personaje.status}
                    species={personaje.species}
                    gender={personaje.gender}
                    origin={personaje.origin.name}
                    image={personaje.image}
                    onClose={props.onClose}
                    />
                    )}
                </div>
               ) : (
                <h2 className='mensajeError'>No favorites characters added yet</h2>
               )
        }
         
      </div>
    );
 }