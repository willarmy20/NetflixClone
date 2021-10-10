import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavbarContainer} from '../styled-components/NavbarStyle'



const links = [
    {image:"https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=35", item: "Home", path:"/"},
    {item: "TvShows", path:"/tvshows"},
    {item: "Movies", path:"/movies"},
    {item:"NewAndPopular", path:"/latest"},
];


export default function NavBar(){
    return(
        <NavbarContainer>
            {links.map((navbaritem)=>(
                <NavLink  to={navbaritem.path} exact activeClassName="current">
                    <img src={navbaritem.image} alt="logo"/>
                    <li>{navbaritem.item}</li>
                </NavLink>
            ))}
        </NavbarContainer>
    )
}