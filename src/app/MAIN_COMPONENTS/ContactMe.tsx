'use client'
import './ContactMe.css';
import NavigationIcon from "@mui/icons-material/Navigation";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                <p className={'contact-title'}>Contact Me</p>
                <p className={'skip get-in-touch'}>Get in touch</p>
                <div className={'contact-tools'}>
                    <div className={'contact-info'}>
                        <div className={'contact-info-option'}>
                            <p className={'contact-info-option-icon'}><PhoneInTalkIcon/></p>
                            <div>
                                <p className={'contact-info-option-title'}>Call Me</p>
                                <p className={'skip contact-info-option-value'}>+972 527566033</p>
                            </div>
                        </div>
                        <div className={'contact-info-option'}>
                            <p className={'contact-info-option-icon'}><EmailIcon/></p>
                            <div>
                                <p className={'contact-info-option-title'}>Email</p>
                                <p className={'skip contact-info-option-value'}>freakstyle0201@gmail.com</p>
                            </div>
                        </div>
                        <div className={'contact-info-option'}>
                            <p className={'contact-info-option-icon'}><LocationOnIcon/></p>
                            <div>
                                <p className={'contact-info-option-title'}>Location</p>
                                <p className={'skip contact-info-option-value'}>Kiryat Ono, Israel</p>
                            </div>
                        </div>
                    </div>
                    <div className={'send-message'}>
                        <div className={'personal-info'}>
                            <div className={'box'}><p>name</p></div>
                            <div className={'box'}><p>email</p></div>
                        </div>
                        <div className={'box'}></div>
                        <div className={'box'}></div>
                        <div className={'send-button'}>
                            <p>Send Message</p>
                            <NavigationIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}