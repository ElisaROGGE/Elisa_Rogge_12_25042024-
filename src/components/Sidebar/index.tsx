import React from 'react';
import bike from "../../assets/img/bike.png"
import muscu from "../../assets/img/muscu.png"
import swim from "../../assets/img/swim.png"
import zen from "../../assets/img/zen.png"
import SidebarIcons from './Icons';
import './index.css'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {

    const icons = [
    {
        img: zen,
    }, 
    {
        img: swim,
    }, 
    {
        img: bike,
    }, 
    {
        img: muscu,
    }, 
    

];
    return (
        <div className='sidebar'>
            <div className='icons'>
                {icons.map((icon, index) => (
                    <div key={index}>
                        <SidebarIcons icon={icon} />
                    </div>
                ))}
            </div>
            <span>Copyright Sportsee 2020</span>
        </div>
    );
};

export default Sidebar;