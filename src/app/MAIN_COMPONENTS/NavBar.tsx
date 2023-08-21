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

        const allH1 = document.querySelectorAll('p');
        for (let i = 0; i < allH1.length; i++) {
            const element = allH1[i] as HTMLElement;
            element.style.color = color;
        }

            const myColor = document.getElementsByClassName('light-mode');
            for (let i = 0; i < myColor.length; i++) {
                const element = myColor[i] as HTMLElement;
                element.style.color = color;
            }

            if (dark){
                document.body.style.backgroundColor = 'white';
                document.getElementById('nav-bar1').style.backgroundColor = bgColor;
                document.getElementById('mobile-nav-container').style.backgroundColor = bgColor;

                for (let i = 0; i < allDiv.length; i++) {
                    const element = allDiv[i] as HTMLDivElement;
                    element.style.backgroundColor = 'whitesmoke';
                }

                setColor('black');
                setBgcolor('whitesmoke');
            }else {
                document.body.style.backgroundColor = '#1c1c2d';
                document.getElementById('nav-bar1').style.backgroundColor = bgColor;
                document.getElementById('mobile-nav-container').style.backgroundColor = bgColor;

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
                    <a href={'#home'} className={'push'}><p className={'light-mode'}>Home</p></a>
                    <a href={'#about1'} style={{textDecoration:'none',color:'white'}}><p className={'light-mode'}>About</p></a>
                    <a href={'#skills'}><p className={'light-mode'}>Skills</p></a>
                    <a href={'#services1'}><p className={'light-mode'}>Services</p></a>
                    <a href={'#'}><p className={'light-mode'}>Portfolio</p></a>
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