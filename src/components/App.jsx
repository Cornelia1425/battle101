import React, {useState, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import StarField from '../visual-effects/StarField'


export default function App(){

function App(){
}
return(
    <div className="App dark-mode">
        {/* <StarField /> */}
        {/* <h1>BATTLE 101</h1> */}
  
        <Header/>
        <Outlet />
        <Footer />
    </div>

)

}