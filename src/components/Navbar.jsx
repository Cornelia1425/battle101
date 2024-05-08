import {NavLink} from 'react-router-dom'

export default function Navbar(){

    return (
        <nav className='nav'>
            <NavLink   className={({isActive}) => isActive? "active" : ""} to='/' >
            Past Events
            </NavLink> <br />
            <NavLink   className={({isActive}) => isActive? "active" : ""} to='/videos'>
            Videos
            </NavLink><br />
            <NavLink   className={({isActive}) => isActive? "active" : ""} to='/about'>
            About
            </NavLink>


        </nav>
    )
}