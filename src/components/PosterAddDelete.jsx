import React from 'react'
import PosterForm from "./PosterForm"
import PastEvents from './PastEvents'

export default function PosterAddDelete (){
  
    return(
        <div className="flex container">
            <PosterForm />
            <PastEvents/>
        </div>
    )
}



