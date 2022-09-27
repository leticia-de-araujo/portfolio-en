import { DivAbout } from "./style";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import { Divider } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Lottie from "react-lottie";
import codingAnimation from "../../../animations/codingAnimation.json";

const About = () => {
  return (
    <DivAbout className="about">
      <Fade bottom duration={1000}>
        <div className="about-content">
          <div className="about-title">
            <Fade left duration={1200}>
              <h2>Sobre</h2>
            </Fade>
            <Fade right duration={1200}>
              <Divider className="divider" />
            </Fade>
          </div>

          <div className="about-textAndLottie">
            <div className="about-text">
              <h3>Um pouco mais sobre mim</h3>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                Sou uma Desenvolvedora Full-Stack | Front-End | Back-End,
                determinada em aprender um pouco mais a cada dia.
              </p>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                Eu cursava faculdade de medicina na UFPR, até perceber que a
                área que eu realmente amava era a de programação!
              </p>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                Eu estou me especializando em Desenvolvimento Web Full-Stack no
                curso de 2000 horas na{" "}
                <a
                  href="https://kenzie.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kenzie"
                >
                  Kenzie Academy Brasil
                </a>
                .
              </p>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                Os meus projetos atuais foram construídos em JavaScript,
                React.js, Node.js/Express e TypeScript.
              </p>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                Atualmente, estou estudando Python e Django. Então, irei
                adicionar projetos também com essas tecnologias aqui em breve.
              </p>
              <div className="typewriter">
                <p className="typewriter-start">
                  <span role="img" aria-label="stars">
                    ✨
                  </span>{" "}
                  Eu amo
                </p>
                <Typewriter
                  options={{
                    strings: [
                      "aprender novas tecnologias.",
                      "resolver problemas complexos.",
                      "solucionar bugs difíceis de resolver.",
                      "experimentar coisas novas.",
                      "colaborar com outras pessoas.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p>
                Em resumo, eu sou uma Desenvolvedora Web criativa, determinada e
                esforçada procurando pela minha primeira oportunidade na área
                tech. Caso você queria{" "}
                <span className="hire-me">me contratar</span>, ou apenas entrar
                em contato comigo, você pode me encontrar no{" "}
                <a
                  href="https://www.linkedin.com/in/leticia-de-araujo-nunes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  Linkedin
                </a>{" "}
                ou via{" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="email"
                >
                  email
                </Link>
                .
              </p>
              <Divider className="divider-2" />
              <p className="location">
                <LocationOnOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                Curitiba, Brasil
              </p>
            </div>
            <div className="lottie">
              <Lottie options={{ animationData: codingAnimation }} />
            </div>
          </div>
        </div>
      </Fade>
    </DivAbout>
  );
};

export default About;
