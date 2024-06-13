import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


export default function EventRecord(){
    const [poster, setPoster] = useState({})
    const params = useParams ()
    const posterId = params.id
   
    useEffect(()=>{
        console.log('fetching poster group_img...')
        fetch(`http://localhost:3000/posters/${posterId}`) 
        .then((res=>res.json()))
        .then(poster=>setPoster(poster))
    },[])    
    // if (!poster.group_img){
    //     return <h1>Loading...</h1>
    // }

    console.log("EventRecord poster.group_img: ", poster.group_img)
    return (
        <div id="group_vertical">
            <img className="group_img" src={`../assets/${poster.group_img}`}  alt={poster.name}/>
            <img className="group_img" src={`../assets/${poster.group_img}`}  alt={poster.name}/>
            <img className="group_img" src={`../assets/${poster.group_img}`}  alt={poster.name}/>
            <img className="group_img" src={`../assets/${poster.group_img}`}  alt={poster.name}/>
        </div>
    )
}