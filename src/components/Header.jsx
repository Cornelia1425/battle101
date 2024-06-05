import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div>
            <Link to="/">
                <img src='../assets/logo_white.png' alt="home" className="header_logo"/>
            </Link>
        {/* <h1 className ='h1_title'>BATTLE 101</h1> */}
        <NavBar/>
        </div >
       
    )
}