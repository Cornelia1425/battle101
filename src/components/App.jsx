import React, {useState, useEffect} from 'react'
import PostersContainer from './PostersContainer'
import StarField from '../visual-effects/StarField'


export default function App(){
    const [posters, setPosters] = useState([])

    useEffect(()=>{
        console.log('fetching posters...')
        fetch('http://localhost:4004/posters') 
        .then((res=>res.json()))
        .then(posterArray=>setPosters(posterArray))
    },[])
    
    console.log("posters: ", posters)

    return(
        <div className="App dark-mode">
            {/* <StarField /> */}
            <h1>BATTLE 101 Past Events</h1>

            <PostersContainer posters={posters}/>

         

        </div>

    )

}