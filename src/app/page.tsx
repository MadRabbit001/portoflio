import './page.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MouseIcon from '@mui/icons-material/Mouse';
import NavigationIcon from '@mui/icons-material/Navigation';
import DownloadIcon from '@mui/icons-material/Download';
import Image from "next/image";


export default function Home() {
  return (
      <>
          <div className={'nav-container'}>
              <nav className={'nav-bar'}>
                  <p>Liron Ben Shushan</p>
                  <a href={'/'} className={'push'}><p>Home</p></a>
                  <a href={'#about'} style={{textDecoration:'none',color:'white'}}><p>About</p></a>
                  <a href={'/'}><p>Skills</p></a>
                  <a href={'/'}><p>Services</p></a>
                  <a href={'/'}><p>Portfolio</p></a>
                  <a href={'/'}><p>Contact Me</p></a>
                  <p><LightModeIcon color={'inherit'} fontSize={"small"} sx={{cursor:'pointer'}}/></p>
              </nav>
          </div>
      <div className={'sections-container'}>

          {/*HOME*/}
        <main className={'main-container'}>
            <div className={'contact-options'}>
                <a href={'https://www.linkedin.com/in/liron-bensh-web-development'} target={'_blank'}>
                    <Image src={'linkedin.png'} style={{width:'35px'}} alt={'linkedin logo'}/>
                </a>
                <a href={'https://github.com/MadRabbit001'} target={'_blank'}>
                    <Image src={'github.png'} style={{width:'35px'}} alt={'github logo'}/>
                </a>
                {/*<a href={'/'} target={'_blank'}>*/}
                {/*    <Image src={'linkedin.png'} style={{width:'35px'}}/>*/}
                {/*</a>*/}
            </div>
            <div className={'info'}>
                <p className={'first'}>Hi, I am Liron</p>
                <p className={'second'}>FullStack Developer</p>
                <p className={'third'}>An enthusiastic and a passionate coder<br/>with an eye for detail and focus to<br/>produce quality work.</p>
                <div className={'contact-me'}>
                    <p>Contact Me</p>
                    <NavigationIcon/>
                </div>
            </div>
            <div className={'pic-of-me'}>
                <Image src={'Mad.png'} style={{borderRadius:'50%',marginTop:'10vh',width:'30vh'}} alt={'my logo'}/>
                <div className={'scroll'}>
                    <i><MouseIcon sx={{color:'#7d5ee3'}} color={'secondary'}/></i>
                    <a href={'#about'} style={{textDecoration:'none',color:'white'}}><p>Scroll Down</p></a>
                    <i><ArrowDownwardIcon sx={{color:'#7d5ee3'}}/></i>
                </div>
            </div>
        </main>
          {/*ABOUT ME*/}
          <div className={'about-container'}>
                  <p id={'about'}>About Me</p>
                  <p style={{color:'#b0afaf'}}>My Introduction</p>
              <div className={'about-data'}>
                  <Image src={'MeTwo.jpeg'} width={'300'} height={300} style={{objectFit:'cover'}} alt={'image of me'}/>
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
          {/*SKILLS.*/}
          <div id="skills" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <h2 style={{fontSize:'2.5rem'}}>Skills</h2>
              <p>My tech stack</p>
              <div className={'skills-grid'}>
                  <div className={'center-skill'}>
                      <Image src={'react.png'} alt="react"/>
                      <p>React</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'spring.png'} alt="react"/>
                      <p>Spring</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'next.png'} alt="react"/>
                      <p>Next.js</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'type.png'} alt="react"/>
                      <p>TypeScript</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'javascript.png'} alt="react"/>
                      <p>JavaScript</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'java.png'} alt="react"/>
                      <p>Java</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'mysql.png'} alt="react"/>
                      <p>MySQL</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'aws.png'} alt="react"/>
                      <p>AWS</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'github.png'} alt="react"/>
                      <p>GitHub</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'postman.png'} alt="react"/>
                      <p>PostMan</p>
                  </div>
                  <div className={'center-skill'}>
                      <Image src={'redux.png'} alt="react"/>
                      <p>Redux</p>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}