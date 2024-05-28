import React, {useState, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'

// import PostersContainer from './PostersContainer'
import StarField from '../visual-effects/StarField'


export default function App(){

function App(){
    
    const [posters, setPosters] = useState([])
    useEffect(()=>{
    fetch('http://localhost:3000/posters')
    ,then(res=>res.json())
    .then(postersArray=>{
        setPosters(postersArray)})
    },[])

   
}

    return(
        <div className="App dark-mode">
            {/* <StarField /> */}
            <br /> <br /> <br />
            <h1>BATTLE 101</h1>
            <br /> <br />

            <Header/>
            <Outlet />
     

         

        </div>

    )

}