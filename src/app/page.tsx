import './page.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import About from "@/app/MAIN_COMPONENTS/About";
import Skills from "@/app/MAIN_COMPONENTS/Skills";


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
          <Home/>
          <About/>
          <Skills/>
      </div>
      </>
  )
}