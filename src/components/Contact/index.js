import AnimateText from '../AnimateText'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
const Contact = () => {
    const [textClass, setTextClass] = useState('text-animate')    
    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
            return  setTextClass('text-animate-hover')
        }, 3000)
    }, [])
    
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_f7e0b89', 'template_shzx76g', refForm.current,
            { publicKey: 'sSbaizr1zIU12aZ-W' }).then(
                () => {
                    alert('Message Sent')
                    window.location.reload(false)
                }, () => {
                    alert('Failed to send the message, please try again')
            }
        )
    }
    return (
        <>
        <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimateText strArr={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        textClass={textClass}
                            idx={10}
                        />
                    </h1>
                    <p>
                        Seeking for enthusiast intern? Im eager to learn from professionals and challenge my knowledge to solve real life problems. Contact now and let me to contribute to your company.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="user_name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="user_email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>

                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>        
                <div className='info-map'>
                    Rivanno H.R.,
                    <br />
                    Indonesia,
                    <br/>
                    Jl. U No.28 7, RT.2/RW.12, Palmerah <br />
                    Jakarta Barat <br />
                    <span>rivannohaidarrozaan@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-6.201341, 106.785012]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[-6.201341, 106.785012]}>
                        </Marker>
                    </MapContainer>
                </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact