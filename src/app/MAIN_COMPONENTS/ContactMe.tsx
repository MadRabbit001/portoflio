import './ContactMe.css';
import NavigationIcon from "@mui/icons-material/Navigation";

export default function ContactMe() {
    return(
        <div id={'contact'} className={'contact-section'}>
            <div className={'coop'}>
                <div className={'coop-info'}>
                    <p style={{fontSize:'1.5rem'}}>You have a new project ?</p>
                    <p style={{fontSize:'1.2rem',width:'55%'}}>I would love to chat with you about your project and see how we can work together to create something truly amazing. Let&rsquo;s connect.</p>
                    <div className={'coop-button'}>
                        <p className={'skip'} style={{color:'#6243d3'}}>Contact Me</p>
                        <NavigationIcon/>
                    </div>
                </div>
                <div className={'coop-img'}>
                    <img alt={'pic of me'}/>
                </div>
            </div>
            <div className={'actual-contact'}>

            </div>
        </div>
    )
}