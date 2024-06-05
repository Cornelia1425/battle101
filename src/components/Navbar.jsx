import {NavLink} from 'react-router-dom'

export default function NavBar(){

    return (
        <nav className='nav_container'>
            <NavLink   className={({isActive}) => isActive? "active" : "nav-link"} to='/' >
            Home
            </NavLink> 
            <NavLink   className={({isActive}) => isActive? "active" : "nav-link"} to='/pastevents' >
            Events
            </NavLink> 
       {/* <NavLink   className={({isActive}) => isActive? "active" : "nav-link"} to='/add' >
            Secret add and delete
            </NavLink>      */}
            <NavLink   className={({isActive}) => isActive? "active" : "nav-link"} to='/videos'>
            Videos
            </NavLink>
            <NavLink   className={({isActive}) => isActive? "active" : "nav-link"} to='/about'>
            About
            </NavLink>
       
            <NavLink   className={({isActive}) => isActive? "active" : "nav-link"} to='/shop'>
            Shop
            </NavLink>
        </nav>
    )
}