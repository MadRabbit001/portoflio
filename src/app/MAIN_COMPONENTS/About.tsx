import img from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
import './About.css';


export default function About() {
    return(
        <div className={'about-component'}>
            <div className={'about-container'}>
                <p id={'about'}>About Me</p>
                <p id={'my-intro'}>My Introduction</p>
                <img src={'MeTwo.jpeg'} alt={'image of me'}/>
                <div className={'about-data'}>
                    <div className={'text-cont'}>
                        <p className={'about-text'}>
                            I have 3 years of experience and a deep understanding of various web technologies such as HTML, CSS, JavaScript, TypeScript, Spring,
                        </p>
                        <p className={'about-text'}>
                            Java, AWS, MySQL, Redux, Next.js, and React.
                            I am dedicated to keeping up with the latest trends and techniques in web development, and I am constantly learning and expanding my skill set. I have a keen eye for detail and strive for perfection in every project I work on.
                            When I&rsquo;m not coding, I enjoy exploring new technologies and work on side projects. I am a sports enthusiast. I play basketball and go to practice regularly. I am also a big football fan and my favourite club is Real Madrid.
                        </p>
                    </div>

                    <div className={'info-two'}>
                    <div className={'about-experience'}>
                        <div>
                            <span className={'experience-number'}>3+</span>
                            <span className={'experience-words'}>Years<br/>experience</span>
                        </div>

                        <div>
                            <span className={'experience-number'}>20+</span>
                            <span className={'experience-words'}>Projects<br/>completed</span>
                        </div>

                        <div>
                            <span className={'experience-number'}>01</span>
                            <span className={'experience-words'}>Companies<br/>worked</span>
                        </div>
                    </div>
                        <div className={'resume'}>
                            <p>Download Resume</p>
                            <DownloadIcon/>
                        </div>
                    </div>


                    </div>
            </div>
        </div>
    )
}