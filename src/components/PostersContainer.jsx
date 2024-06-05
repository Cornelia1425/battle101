import React from 'react'
import PosterCard from './PosterCard'
// import {Link} from 'react-router-dom'



export default function PostersContainer({posters}){
    const mappedPosters = posters.map(poster => (     
        <PosterCard poster={poster} key={poster.id}/>
)
)

    return(
        <div className="flex container">
            {mappedPosters}
        </div>
    )
}