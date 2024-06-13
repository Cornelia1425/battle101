import React from 'react'
import PosterCard from './PosterCard'
// import {Link} from 'react-router-dom'



export default function PostersContainer({posters, onRemove}){
    const mappedPosters = posters.map(poster => (     
        <PosterCard poster={poster} key={poster.id} onRemove={onRemove}/>
)
)

    return(
        <div className="">
            {mappedPosters}
        </div>
    )
}