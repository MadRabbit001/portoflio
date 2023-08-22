import './ContactMe.css';
import NavigationIcon from "@mui/icons-material/Navigation";

export default function ContactMe() {
    return(
        <div id={'contact'} className={'contact-section'}>
            <div className={'coop'}>
                <div className={'coop-info'}>
                    <p style={{fontSize:'150%'}}>You have a new project ?</p>
                    <p style={{fontSize:'120%',width:'85%'}}>I would love to chat with you about your project and see how we can work together to create something truly amazing. Let&rsquo;s connect.</p>
                    <div className={'coop-button'}>
                        <p className={'skip'} style={{color:'#6243d3'}}>Contact Me</p>
                        <NavigationIcon sx={{fontSize:'120%'}}/>
                    </div>
                </div>
                <div className={'coop-img'}>
                    {/*<img src={'me3.png'} alt={'pic of me'}/>*/}
                </div>
            </div>
            <div className={'actual-contact'}>

            </div>
        </div>
    )
}