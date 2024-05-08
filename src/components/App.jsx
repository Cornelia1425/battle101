import React, {useState, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
// import PostersContainer from './PostersContainer'
import StarField from '../visual-effects/StarField'


export default function App(){


    return(
        <div className="App dark-mode">
            {/* <StarField /> */}
            <br /> <br /> <br />
            <h1>BATTLE 101</h1>
            <br /> <br />

            <Navbar />
            <Outlet />
            
            {/* <PostersContainer posters={posters}/> */}

         

        </div>

    )

}