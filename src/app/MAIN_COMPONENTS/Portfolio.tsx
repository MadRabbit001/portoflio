'use client'
import './Portfolio.css';
import {useState} from "react";

export default function Portfolio() {

    const [enter,setEnter] = useState<boolean>(true);

    const handleDescription = () => {
        setEnter(!enter);
    }


    return (
        <div id={'portfolio'} className={'portfolio'}>
            <p className={'portfolio-title'}>Portfolio</p>
            <p className={'recent-work'}>Most Recent Work</p>
            <div className="marquee">
                <div className="marquee--inner">
                    <span>
                        {enter?<img onMouseOver={handleDescription} src={'neya.png'} className="orb"/>:<a onMouseLeave={handleDescription} href={'http://neya-busines-queries.s3-website-us-east-1.amazonaws.com/'} target={'_blank'} className={'orb'}><div className={'desc'} style={{width:'150px'}}><br/><br/>ecommerce - named NEYA a place to design your own dream shirt and make it come true!</div></a>}
                        <img src={'Mad.png'} className="orb"/>
                        <img src={'Mad.png'} className="orb"/>
                        <img src={'neya.png'} className="orb"/>
                        <img src={'Mad.png'} className="orb"/>
                        <img src={'Mad.png'} className="orb"/>
                        <img src={'neya.png'} className="orb"/>
                        <img src={'Mad.png'} className="orb"/>

                    </span>
                </div>
            </div>
        </div>
    );
};