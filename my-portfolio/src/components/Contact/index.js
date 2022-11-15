import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'service_rt3g31o',
      'template_2a7noll',
      e.target,
      'JcckCoTieKhHtoz_T'
    )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'e', 'z', ' ', 'm', 'o', 'i']}
              idx={15}
            />
          </h1>
          <p>
          Je suis disponible pour un poste de développeur web junior.
          Je suis également ouvert à toute proposition de collaboration ou de projet freelance.
          N'hésitez pas à me contacter pour plus d'informations.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVOYER" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
        Julien SARDA,
          <br />
          <br />
          France,
          <br />
          Dammartin-en-Goële, <br />
          77230
          <br />
          <br />
          <span>julien.sarda@icloud.com</span>
          <br />
          <span>07 66 42 02 10</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[48.8583701, 2.2944813, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.8583701, 2.2944813, 19.61045]}>
              <Popup>Julien est proche de Paris , N'hésitez pas à le contacter même
                pour un café.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Contact
