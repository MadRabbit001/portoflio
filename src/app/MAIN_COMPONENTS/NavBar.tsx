'use client'
import LightModeIcon from "@mui/icons-material/LightMode";
import './NavBar.css';
import BasicMenu from "@/app/MAIN_COMPONENTS/BasicMenu";
import {useEffect, useState} from "react";


export default function NavBar() {

    const [dark,setDark] = useState<boolean>(false);
    const [color,setColor] = useState<string>('white');
    const [bgColor,setBgcolor] = useState<string>('#1c1c2d')

    useEffect(() => {

        const allDiv = document.querySelectorAll('.card');

        const allSpan = document.querySelectorAll('span');
        for (let i = 0; i < allSpan.length; i++) {
            const element = allSpan[i] as HTMLElement;
            element.style.color = color;
        }

        const allP = document.querySelectorAll('p');
        for (let i = 0; i < allP.length; i++) {
            const element = allP[i] as HTMLElement;
            if (element.className !== 'skip'){
                element.style.color = color;
            }
        }

            const myColor = document.getElementsByClassName('light-mode');
            for (let i = 0; i < myColor.length; i++) {
                const element = myColor[i] as HTMLElement;
                element.style.color = color;
            }

            if (dark){
                document.body.style.backgroundColor = 'white';
                document.getElementById('nav-bar1')!.style.backgroundColor = bgColor;
                document.getElementById('mobile-nav-container')!.style.backgroundColor = bgColor;

                for (let i = 0; i < allDiv.length; i++) {
                    const element = allDiv[i] as HTMLDivElement;
                    element.style.backgroundColor = 'whitesmoke';
                }

                setColor('black');
                setBgcolor('whitesmoke');
            }else {
                document.body.style.backgroundColor = '#1c1c2d';
                document.getElementById('nav-bar1')!.style.backgroundColor = bgColor;
                document.getElementById('mobile-nav-container')!.style.backgroundColor = bgColor;

                for (let i = 0; i < allDiv.length; i++) {
                    const element = allDiv[i] as HTMLDivElement;
                    element.style.backgroundColor = '#222236';
                }

                setColor('white');
                setBgcolor('#1c1c2d');
            }

    },[dark,color]);

    const toggleDarkMode = () => {
        setDark(!dark);
    }


    return(
        <>
            <div className={'nav-container'}>
                <nav id={'nav-bar1'} className={'nav-bar'}>
                    <p className={'light-mode'}>Liron Ben Shushan</p>
                    <a href={'#home'} className={'push'}><p id={'home2'} className={'light-mode'}>Home</p></a>
                    <a href={'#about1'} style={{textDecoration:'none',color:'white'}}><p id={'about2'} className={'light-mode'}>About</p></a>
                    <a href={'#skills'}><p id={'skills2'} className={'light-mode'}>Skills</p></a>
                    <a href={'#services1'}><p id={'services2'} className={'light-mode'}>Services</p></a>
                    <a href={'#portfolio'}><p className={'light-mode'}>Portfolio</p></a>
                    <a href={'#'}><p className={'light-mode'}>Contact Me</p></a>
                    <p><LightModeIcon onClick={toggleDarkMode} fontSize={"small"} sx={{cursor:'pointer',color:color}}/></p>
                </nav>
            </div>

            <div id={'mobile-nav-container'} className={'mobile-nav-container'}>
                <p>Liron Ben Shushan</p>
                <BasicMenu toggleDarkMode={toggleDarkMode} color={color} bgColor={bgColor}/>
            </div>
        </>
    )
}