import { Link } from "react-router-dom";
import "./Card.css"
import { useEffect, useState } from "react";

import {useDispatch, useSelector}  from "react-redux";
import * as actions from "../redux/actions";

export default function Card(props) {
   const [isFav, setIsFav] = useState(false)

   const dispatch = useDispatch()

   const myFavorites = useSelector((state)=>state.myFavorites)

   useEffect(() => {
      
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });

   }, [myFavorites]);

   function handleFavorite(character){
      if(isFav===false){
         setIsFav(true)
         dispatch(actions.addFav(character))
      }else{
         setIsFav(false)
         dispatch(actions.removeFav(character.id))
      }
   }


   return (
      <div className="card">
         <div className="botones">
            <button onClick={()=>props.onClose(props.id)}>X</button>
            {
               isFav ? (
                  <button onClick={()=>handleFavorite(props)}>❤️</button>
               ) : (
                  <button onClick={()=>handleFavorite(props)}>🤍</button>
               )
            }
         </div>
         <Link className="linkDetail" to={`/detail/${props.id}`} >         
            <img src={props.image} className="imagen" alt='imagen personaje rick y morty' />
            <h3>{props.name}</h3>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin.name}</h2>
         </Link>
      </div>
   );
}
