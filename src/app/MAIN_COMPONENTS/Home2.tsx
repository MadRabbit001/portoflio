import img from "next/image";
import NavigationIcon from "@mui/icons-material/Navigation";
import MouseIcon from "@mui/icons-material/Mouse";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import './Home.css';


export default function Home2() {

    return(
        <div id={'home'} className={'home-component'}>
            <main className={'main-container'}>
                <div className={'contact-options'}>
                    <a href={'https://www.linkedin.com/in/liron-bensh-web-development'} target={'_blank'}>
                        <img src={'linkedin.png'} style={{width:'35px'}} alt={'linkedin logo'}/>
                    </a>
                    <a href={'https://github.com/MadRabbit001'} target={'_blank'}>
                        <img src={'github.png'} style={{width:'35px'}} alt={'github logo'}/>
                    </a>
                </div>
                <div className={'info-pic-cont'}>
                    <div className={'info'}>
                        <p className={'first'}>Hi, I am Liron</p>
                        <p className={'second'}>FullStack Developer</p>
                        <p className={'third'}>An enthusiastic and a passionate coder<br/>with an eye for detail and focus to<br/>produce quality work.</p>
                    </div>
                    <div className={'contact-me'}>
                        <a href={'#contact'}>
                            <p>Contact Me</p>
                            <NavigationIcon/>
                        </a>

                    </div>
                    <div className={'pic-of-me'}>
                        <img src={'Mad.png'} style={{borderRadius:'50%',marginTop:'10vh',width:'30vh'}} alt={'my logo'}/>
                    </div>
                    <div className={'scroll'}>
                        <i><MouseIcon sx={{color:'#7d5ee3'}} color={'secondary'}/></i>
                        <a href={'#about1'} style={{textDecoration:'none',color:'white'}}><p>Scroll Down</p></a>
                        <i><ArrowDownwardIcon sx={{color:'#7d5ee3'}}/></i>
                    </div>
                </div>
            </main>
        </div>
    )
}