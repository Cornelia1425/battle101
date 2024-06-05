import React from 'react'
import PosterFacts from './PosterFacts'
import {useState} from 'react'
import { Link } from 'react-router-dom'


export default function PosterCard({poster}){
    // const [isImage, setIsImage] = useState(true)
    console.log("card poster", poster)

    function handleRemove(e){
        e.stopProgation()
        onpointermove(poster.id)

        fetch(`http://localhost:3000/posters/${poster.id}`,{
            method:"DELETE"
        })
    }

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
                        <button onClick={handleRemove}>Remove</button>
                    </Link>
                </div>
            </div>
       
        </div>
       


    )
}   