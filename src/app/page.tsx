import './page.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import About from "@/app/MAIN_COMPONENTS/About";
import Skills from "@/app/MAIN_COMPONENTS/Skills";
import Home2 from "@/app/MAIN_COMPONENTS/Home2";
import NavBar from "@/app/MAIN_COMPONENTS/NavBar";


export default function Home() {
  return (
      <div className={'god-container'}>
          <NavBar/>
      <div className={'sections-container'}>
          <Home2/>
          <About/>
          <Skills/>
      </div>
      </div>
  )
}