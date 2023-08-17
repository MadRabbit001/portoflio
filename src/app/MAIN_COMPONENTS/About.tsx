import img from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
import './page.css';


export default function About() {
    return(
        <>
            <div className={'about-container'}>
                <p id={'about'}>About Me</p>
                <p style={{color:'#b0afaf'}}>My Introduction</p>
                <div className={'about-data'}>
                    <img src={'MeTwo.jpeg'} width={'300'} height={300} style={{objectFit:'cover'}} alt={'image of me'}/>
                    <div>
                        <p  className={'about-text'}>I have 8 years of experience and a deep<br/>understanding of various web<br/>technologies such as HTML, CSS,<br/>JavaScript, TypeScript, Angular, MEAN,<br/>Vue.js, and React.<br/>
                            I am dedicated to keeping up with the<br/>latest trends and techniques in web<br/>development, and I am constantly<br/>learning and expanding my skill set. I have<br/>a keen eye for detail and strive for<br/>perfection in every project I work on.<br/>
                            When I&rsquo;m not coding, I enjoy exploring new<br/>technologies and work on side projects. I<br/>am a sports enthusiast. I play basketball<br/>and go to practice regularly. I am also a<br/>big football fan and my favourite club is<br/>Arsenal.</p>

                        <div className={'about-experience'}>
                            <div>
                                <span className={'experience-number'}>8+</span>
                                <span className={'experience-words'}>Years <br/>experience</span>
                            </div>

                            <div>
                                <span className={'experience-number'}>20+</span>
                                <span className={'experience-words'}>Projects <br/>completed</span>
                            </div>

                            <div>
                                <span className={'experience-number'}>04+</span>
                                <span className={'experience-words'}>Companies <br/>worked</span>
                            </div>
                        </div>
                        <div className={'resume'}>
                            <p>Download Resume</p>
                            <DownloadIcon/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}