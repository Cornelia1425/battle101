import React from 'react'
import PosterFacts from './PosterFacts'
import {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function PosterCard({poster, onRemove}){
    // const [isImage, setIsImage] = useState(true)
    console.log("card poster", poster)

    function handleRemove(e){
        e.stopPropagation()
        onRemove(poster.id)

        fetch(`http://localhost:3000/posters/${poster.id}`,{
            method:"DELETE"
        })
    }

  
    const location = useLocation()
    const isVisible = location.pathname === '/add'
    

    return (
        /***** this is click flip *****/
        // <div className="card" onClick={()=>setIsImage(!isImage)}>
        //     {isImage ?  
        //     (<>
        //     <h2>{poster.name}</h2>
        //     <img  src={`../assets/${poster.cover_img}`} alt={poster.id} />
        //     </>) :
        //     (<>
        //     <PosterFacts poster={poster}/>
        //     </>
        //     )}
        // </div>

        <div className="card_container">
            <div className="card">
                <div className="card_front">
                    <h2>{poster.name}</h2>
                  
                        <img  src={`../assets/${poster.cover_img}`} alt={poster.id} />
                    
                </div>
                <div className="card_back">
                    <Link to={`/record/${poster.id}`} key={poster.id}> 
                        <PosterFacts poster={poster}/>
                        
                    </Link>
                </div>
               
            </div>
            {isVisible && <button className="deleteButton" onClick={handleRemove}>Remove</button>}
       
        </div>
       


    )
}   