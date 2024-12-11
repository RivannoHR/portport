import { useEffect, useState } from 'react';
import './index.scss'
import AnimateText from '../AnimateText';
import Loader from 'react-loaders';
import portoData from "../../data/portofolio.json"


const About = () => {
    const [textClass, setTextClass] = useState('text-animate');
    const [skillText, setSkillText] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTextClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    useEffect(() => {
        setTimeout(() => {
            setSkillText(true);
        }, 2000);
    }, []);

    const renderPortofolio = (porto) => {
        return (
            <div className="images-container">
                {
                    porto.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img src={port.cover}
                                    className='portofolio-image'
                                alt="portofolio" />
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.desc}</h4>
                                    <button className='btn' onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    return (
        <>
            <div className="container about-page">
                <h1 className="page-title">
           
                    <AnimateText
                        textClass={textClass}
                        strArr={"Portfolio".split("")}
                        idx={10}
                    />
                    <div className={`skill ${skillText ? 'show' : ''}`}>
                        Skill: HTML, CSS, JS, React
                    </div>
                </h1>
                
                <div>{renderPortofolio(portoData.portfolio)}</div>
            </div>
           
            <Loader type="pacman" />
        </>
    )
}

export default About;