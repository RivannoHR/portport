import { Link } from "react-router-dom";

import './index.scss';
import { useEffect, useState } from "react";
import AnimateText from "../AnimateText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faDocker, faGolang, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from 'react-loaders';
import ats from "../../data/Mock.pdf"

const Home = () => {
    const [textClass, setTextClass] = useState('text-animate')
    
  
    
    useEffect(() => {
        setTimeout(() => {
            return  setTextClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={textClass}>H</span>
                <span className={`${textClass} _12`}>i,</span>
                <br/>
                <span className={`${textClass} _13`}>I</span>
                        <span className={`${textClass} _14`}>'m</span>
                <img/>
                <AnimateText textClass= {textClass} strArr={"Rivanno".split("")} idx={15} />
                <br />
                   Undergraduate
                </h1>
                <h2>Compsci student | Network specialization</h2>
                <Link to="/contact" className="contactButton">CONTACT ME</Link>
                <a href={ats} download="Resume"><div className="contactButton">RESUME</div></a>
            </div>

            <div className="stage-cube-cont">
                
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" /> 
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGolang} color="#28A4D9" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faDocker} color="#1D63ED" />
                    </div>
                </div>
            </div>
            </div>
        <Loader type="pacman" />
        </>
        
    )
}

export default Home;
