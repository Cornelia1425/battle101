// import EventRecordById from './EventRecord'
import PostersContainer from './PostersContainer'
import React, {useState, useEffect} from 'react'

export default function PastEvents(){

    const [posters, setPosters] = useState([])

    useEffect(()=>{
        console.log('fetching posters...')
        fetch('http://localhost:3000/posters') 
        .then((res=>res.json()))
        .then(posterArray=>setPosters(posterArray))
    },[])    
    console.log("PastEvents posters: ", posters)

    function onRemove(id){
        const array_after_remove = posters.filter((poster)=>
        id===poster.id? false : true) //returns true for all other posters not this id, array.fitler(rule), whoever the rule returns true, remain in the array. if id1, 1==1, return false, so not include in the new array
        setPosters(array_after_remove)
    }
    return (
        <>
        {/* <h2>Battle101 Past Events</h2> */}

        <PostersContainer posters={posters} onRemove={onRemove}/>
   

      
        </>
    )

}

