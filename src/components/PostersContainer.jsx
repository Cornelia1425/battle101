import React from 'react'
import PosterCard from './PosterCard'
import PosterAddDelete from './PosterAddDelete'

export default function PostersContainer({posters}){
    const mappedPosters = posters.map(poster => <PosterCard key={poster.id} poster={poster}/>)

    return(
        <div className="flex container">
            <PosterAddDelete/>
            {mappedPosters}
        </div>
    )
}