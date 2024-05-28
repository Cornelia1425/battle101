import {NavLink} from 'react-router-dom'

export default function NavBar(){

    return (
        <nav className='nav'>
            <NavLink   className={({isActive}) => isActive? "active" : ""} to='/' >
            Home
            </NavLink> <br />
            <NavLink   className={({isActive}) => isActive? "active" : ""} to='/pastevents' >
            Past Events
            </NavLink> <br />
            <NavLink   className={({isActive}) => isActive? "active" : ""} to='/add' >
            Secret add and delete
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