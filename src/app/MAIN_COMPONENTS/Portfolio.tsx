'use client'
import './Portfolio.css';

export default function Portfolio() {


    return (
        <div id={'portfolio'} className={'portfolio'}>
            <p className={'portfolio-title'}>Portfolio</p>
            <p className={'recent-work'}>Most Recent Work</p>
            <div className="marquee">
                <div className="marquee--inner">
                    <span>
                        <img src={'neya.png'} className="orb"/>
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