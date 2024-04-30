import React from 'react'
import PosterFacts from './PosterFacts'
import {useState} from 'react'

export default function PosterCard({poster}){
    const [isImage, setIsImage] = useState(true)


    return (
        <div className="card" onClick={()=>setIsImage(!isImage)}>
        
        {isImage ?  
        (<>
        <h2>{poster.name}</h2>
        <img  src={`../assets/${poster.cover_img}`} alt={poster.id} />
        </>) :
        (<>
        
        <PosterFacts poster={poster}/>
        </>
        ) 
        }
        </div>
    )
}   