import React from 'react';
import s from './Title.module.css'

type TitlePropsType = {
    title: string
    hLevel?: 1 | 2 | 3 | 4 | 5
    costumeStyle?: string
}
export const TitleCustom: React.FC<TitlePropsType> = (
    {title, hLevel = 1, costumeStyle}) => {

    const CustomTag = `h${hLevel}`as keyof JSX.IntrinsicElements;

    const finalStyle = `${s.titleStyle} ${costumeStyle ? costumeStyle : ''}`
    return (
        <div className={finalStyle}>
            <CustomTag>{title}</CustomTag>
        </div>
    );
};

