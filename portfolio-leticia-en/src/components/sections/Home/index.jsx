import { HomeMainDiv } from "./style";
import { Fade, Bounce } from "react-reveal";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import ProfilePic from "../../../imgs/social/profilepic.png";
import { Button, IconButton, SvgIcon } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import projectsBanner from "../../../imgs/projects/projects.png";
import NavBar from "../../assets/NavBar";
import Skills from "../Skills";
import { SiGithub } from "react-icons/si";

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeMainDiv className="home">
        {/* <Fade bottom duration={1000}>
        <a href="https://portfolio-leticia.vercel.app/" className="language">
          <IconButton>
            EN <LanguageIcon sx={{ fontSize: "0.9rem" }} />
          </IconButton>
        </a>
      </Fade> */}
        <div className="home-text-div">
          <Fade bottom duration={1000}>
            <div className="home-text-top-div">
              <Bounce>
                <img alt="Profile" src={ProfilePic} className="profilePic" />
              </Bounce>

              <h1>
                Olá, me chamo <span className="name">Letícia Araújo</span>
                <span
                  className="wave-emoji"
                  role="img"
                  aria-label="waving hand"
                >
                  👋
                </span>
              </h1>
            </div>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    "Desenvolvedora Full-Stack",
                    "Desenvolvedora Front-End",
                    "Desenvolvedora Back-End",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 15,
                  delay: 100,
                }}
              />
            </h2>
            <div className="linksAndButtons">
              <Bounce>
                <div className="links">
                  <a
                    href="https://github.com/leticia-de-araujo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon component={SiGithub} />
                  </a>
                </div>

                <div className="scroll-down">
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-58}
                  >
                    <Button variant="contained">
                      Ver projetos
                      <ArrowDropDownCircleIcon
                        fontSize="small"
                        style={{
                          pointerEvents: "fill",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      />
                    </Button>
                  </Link>
                </div>
              </Bounce>
            </div>
          </Fade>
          <Skills />
        </div>
        <div className="home-banner-div">
          <img src={projectsBanner} alt="My projects" />
        </div>
      </HomeMainDiv>
    </>
  );
};

export default Home;
