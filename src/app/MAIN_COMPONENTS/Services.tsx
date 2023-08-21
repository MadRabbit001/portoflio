import './Services.css';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TerminalIcon from '@mui/icons-material/Terminal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Services() {
    return(
        <div id={'services1'} className={'services'}>
            <p  className={'services-title'}>Services</p>
            <p className={'what-offer'}>What I Offer</p>
            <div className={'card-cont'}>
                <div className={'card'}>
                    <PhoneIphoneIcon fontSize={'large'} sx={{color:'#6243d3'}}/>
                    <p>Mobile App Developer</p>
                    <div className={'view-more'}>
                        <p>View More</p>
                        <div className={'hover-area'}>
                            <ArrowForwardIcon fontSize={'small'} sx={{color:'#6243d3'}}/>
                        </div>
                    </div>
                </div>
                <div className={'card'}>
                    <TerminalIcon fontSize={'large'} sx={{color:'#6243d3'}}/>
                    <p>Web App Developer</p>
                    <div className={'view-more'}>
                        <p>View More</p>
                        <div className={'hover-area'}>
                            <ArrowForwardIcon fontSize={'small'} sx={{color:'#6243d3'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}