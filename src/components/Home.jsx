import PostersContainer from './PostersContainer'

import React, {useState, useEffect} from 'react'

function Home(){

    const [posters, setPosters] = useState([])

    useEffect(()=>{
        console.log('fetching posters...')
        fetch('http://localhost:4004/posters') 
        .then((res=>res.json()))
        .then(posterArray=>setPosters(posterArray))
    },[])
    
    console.log("posters: ", posters)
    return (
        <>
        <h2>Battle101 Past Events</h2>

        <PostersContainer posters={posters}/>
        </>
    )

}

export default Home