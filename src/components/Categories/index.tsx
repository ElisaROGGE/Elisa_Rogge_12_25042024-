import React, { useState, useEffect } from 'react';

interface CategoryProps {
    icon: string;
    category: number | undefined;
    label: string;
    unit: string;
    color: string;
}

const Category: React.FC<CategoryProps> = ({ icon, category, label, unit, color }) => {
    const [categoryText, setCategoryText] = useState("");

    useEffect(() => {
        if (category !== undefined) {
            setCategoryText(`${category}${unit}`);
        }
    }, [category, unit]);

    return (
        <div className='flex gap-5'>
            <div className='icon p-5 border-transparent border-1 rounded' style={{ backgroundColor: color }}>
                <img src={icon} alt='category' />
            </div>
            <div className='flex flex-col'>
                <span className='font-bold'>{categoryText}</span>
                <span>{label}</span>
            </div>
        </div>
    );
};

export default Category;
