import LightModeIcon from "@mui/icons-material/LightMode";
import './NavBar.css';


export default function NavBar() {
    return(
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

            <div className={'mobile-nav-container'}>
                <p>Liron Ben Shushan</p>
                <button className={'hamburger'}>something</button>
                <nav>
                    <ul className={'menu'}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Contact Me</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}