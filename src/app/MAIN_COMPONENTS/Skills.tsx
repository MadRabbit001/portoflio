import img from "next/image";
import './Skills.css';


export default function Skills() {
    return(
        <div className={'skills-component'}>
            <div id="skills" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h2 style={{fontSize:'2.5rem'}}>Skills</h2>
                <p>My tech stack</p>
                <div className={'skills-grid'}>
                    <div className={'center-skill'}>
                        <img src={'react.png'} alt="react"/>
                        <p>React</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'spring.png'} alt="react"/>
                        <p>Spring</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'next.png'} alt="react"/>
                        <p>Next.js</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'type.png'} alt="react"/>
                        <p>TypeScript</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'javascript.png'} alt="react"/>
                        <p>JavaScript</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'java.png'} alt="react"/>
                        <p>Java</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'mysql.png'} alt="react"/>
                        <p>MySQL</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'aws.png'} alt="react"/>
                        <p>AWS</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'github.png'} alt="react"/>
                        <p>GitHub</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'postman.png'} alt="react"/>
                        <p>PostMan</p>
                    </div>
                    <div className={'center-skill'}>
                        <img src={'redux.png'} alt="react"/>
                        <p>Redux</p>
                    </div>
                </div>
            </div>
        </div>
    )
}