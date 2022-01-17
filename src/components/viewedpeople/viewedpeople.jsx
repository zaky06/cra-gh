import React from "react";``
import style from "./viewedpeople.module.css";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';

const userData = [
    {
        src: 'https://gambolthemes.net/workwise-new/images/resources/s1.png',
        name: 'Jessica William',
        description: 'Graphic Designer'
    },
    {
        src: 'https://gambolthemes.net/workwise-new/images/resources/s2.png',
        name: 'John Doe',
        description: 'PHP Developer'
    },
    {
        src: 'https://gambolthemes.net/workwise-new/images/resources/s3.png',
        name: 'Poonam',
        description: 'Wordpress Developer'
    },
    {
        src: 'https://gambolthemes.net/workwise-new/images/resources/s3.png',
        name: 'Bill Gates',
        description: 'C / C++ Developer'
    },
    {
        src: 'https://gambolthemes.net/workwise-new/images/resources/s5.png',
        name: 'Jessica William',
        description: 'Graphic Designer'
    },
    {
        src: 'https://gambolthemes.net/workwise-new/images/resources/s6.png',
        name: 'John Doe',
        description: 'PHP Developer'
    },
]

/* 
Icon: {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
*/

const ViewedPeople = () => {

    const items = userData.map(((item, index) => {
        return ( 
            <div key={index} className={style.secondSection}>
                <div className={style.information}>
                    <img src={item.src} alt="" />
                    <div className={style.nameAndJob}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div>
                    <Button size="sm" className={style.button} variant="outline-danger"><AiOutlinePlus/></Button>
                    {/* <BsFillArchiveFill size='14' color='red' title='icon title'> deded </BsFillArchiveFill> */}
                </div>
            </div>
            )
        }  
    ))

    return (
        <div className={style.suggestions}>
            <div className={style.firstSection}>
                <h3 className={style.name}>Most Viewed People</h3>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>

            {items}
            <a href="">View More</a>
        </div>
    )
}

export default ViewedPeople;