import { useEffect, useState } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A"," ","P","R","O","P","O","S"]}
              idx={15}
            />
          </h1>
          <p>
            Je suis un pére de famille en reconversion professionnelle. J'ai
            décidé de me lancer dans le développement web car j'ai toujours été
            passionné par l'informatique. J'ai commencé par apprendre le HTML et
            le CSS puis j'ai découvert le JavaScript. J'ai ensuite appris le
            framework React et j'ai commencé à créer des applications web.
          </p>
          <p align="LEFT">
            Je suis passionné par le développement web et je suis toujours à la
            recherche de nouvelles technologies. Je suis motivé , curieux et
            j'aime apprendre de nouvelles choses. Fort de mes expériences
            professionnelles, je suis capable de travailler en équipe ou en
            autonomie.
          </p>
          <p>
            Pour me décrire en quelques mots, je suis un pére de famille qui
            veut réussir dans ma reconversion professionnelle pour pouvoir
            assurer l'avenir de ma famille mais aussi vivre de ma passion.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#12d2f6" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#dc4a25" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#264bdd" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faSass} color="#c76594" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  );
};

export default About;
