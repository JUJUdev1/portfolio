import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['J', 'u', 'l', 'i', 'e', 'n']
  const jobArray = [
    'D',
    'é',
    'v',
    'e',
    'l',
    'o',
    'p',
    'p',
    'e',
    'u',
    'r',
    ' ',
    'F',
    'r',
    'o',
    'n',
    't',
    '-',
    'e',
    'n',
    'd',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>B</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>n</span>
            <span className={`${letterClass} _14`}>j</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}>u</span>
            <span className={`${letterClass} _17`}>r</span>
            <span className={`${letterClass} _18`}>,</span>
            <br />
            <span className={`${letterClass} _19`}>J</span>
            <span className={`${letterClass} _20`}>e</span>
            <span className={`${letterClass} _21`}> </span>
            <span className={`${letterClass} _22`}>s</span>
            <span className={`${letterClass} _23`}>u</span>
            <span className={`${letterClass} _24`}>i</span>
            <span className={`${letterClass} _25`}>s</span>
            <span className={`${letterClass} _26`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={14}
            />
          </h1>
          <h2>
          Développeur web Front-end | Junior | ReactJS.
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACTEZ MOI
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="line-scale" />
    </>
  )
}

export default Home
