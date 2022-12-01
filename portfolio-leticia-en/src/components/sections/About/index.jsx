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
            <Fade left duration={1000}>
              <h2>About me</h2>
            </Fade>
            <Fade right duration={1000}>
              <Divider className="divider" />
            </Fade>
          </div>

          <div className="about-textAndLottie">
            <div className="about-text">
              <h3>Hey, my name is Letícia!</h3>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                I'm a Full-Stack | Back-End Developer, focused on learning a
                little more each day.
              </p>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                I'm a former med student who realized that what I actually loved
                to do was coding!
              </p>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                I am studying Full-Stack Web Development in the 2000-hour course
                at{" "}
                <a
                  href="https://kenzie.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kenzie"
                >
                  Kenzie Academy Brazil
                </a>
                .
              </p>
              <p>
                <span role="img" aria-label="stars">
                  ✨
                </span>{" "}
                My current projects were developed in JavaScript, React.js,
                Node.js (Express), TypeScript and Python (Django).
              </p>
              <div className="typewriter">
                <p className="typewriter-start">
                  <span role="img" aria-label="stars">
                    ✨
                  </span>{" "}
                  I love
                </p>
                <Typewriter
                  options={{
                    strings: [
                      "learning new technologies.",
                      "solving complex problems.",
                      "fixing hard-to-fix bugs.",
                      "trying new things.",
                      "collaborating with others.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p>
                I'm a Web Developer passionate about developing efficient,
                secure and user-focused applications. If you'd like to get in
                touch with me, you can find me on{" "}
                <a
                  href="https://www.linkedin.com/in/leticia-de-araujo-nunes/?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  Linkedin
                </a>{" "}
                or via{" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-58}
                  className="email"
                >
                  email
                </Link>
                .
              </p>
              <Divider className="divider-2" />
              <p className="location">
                <LocationOnOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                Curitiba, Brazil
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
