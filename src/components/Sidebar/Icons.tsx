import React from 'react';

interface SidebarIconsProps {
    icon: {
        img: string;
    };
}

const SidebarIcons: React.FC<SidebarIconsProps> = ({icon}) => {
    console.log(icon)
    
    return (
        <div className='icon-list'>
            <img src={icon.img} />
        </div>
    );
};

export default SidebarIcons;