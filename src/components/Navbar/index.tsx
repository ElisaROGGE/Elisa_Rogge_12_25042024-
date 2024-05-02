import React from 'react';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import './index.css'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

    const links = [
    {
        name: 'Accueil',
        url: ""
    }, 
    {
        name: 'Profil',
        url: ""
    },
    {
        name: 'Réglages',
        url: ""
    },
    {
        name: 'Communauté',
        url: ""
    },

];
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <span className='title'>Sportsee</span>
            </div>
            <ul className='list'>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.url}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;