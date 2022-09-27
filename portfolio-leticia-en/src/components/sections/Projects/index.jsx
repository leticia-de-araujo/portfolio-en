import { Avatar, Card, Divider, Button } from "@mui/material";
import { Fade } from "react-reveal";
import { StyledDiv } from "./style";
import { projects } from "../../../data/projects";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <StyledDiv className="projects">
      <Fade bottom>
        <div className="projects-innerDiv">
          <div className="projects-title">
            <Fade left duration={1200}>
              <h2>Projetos</h2>
            </Fade>
            <Fade right duration={1200}>
              <Divider className="divider" />
            </Fade>
          </div>
          <div className="projects-cards">
            {projects.map((project) => (
              <Fade bottom duration={1000} distance="20px" key={project.id}>
                <Card className="project-card">
                  <header style={{ background: project.bgColor }}>
                    <h2>{project.name}</h2>
                    <span>{project.stack}</span>
                    <Avatar
                      alt={`${project.id} icon`}
                      src={project.icon}
                      className="avatar"
                      style={{ background: project.bgColor }}
                    />
                  </header>
                  <section className="project-info">
                    <ul>
                      {project.info.map((info) => (
                        <li key={uuidv4()}>
                          <p>
                            <span>•</span> {info}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="project-techs">
                    <ul>
                      {project.techs.map((tech) => (
                        <li key={uuidv4()}>{tech}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="project-nav">
                    {(project.liveDemo || project.BaseUrl) && (
                      <a
                        href={
                          project.liveDemo ? project.liveDemo : project.BaseUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="contained"
                          size="small"
                          className={project.id}
                          style={{ background: project.bgColor }}
                        >
                          {project.liveDemo ? "Live Demo" : "Base URL"}
                        </Button>
                      </a>
                    )}

                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="contained"
                        size="small"
                        className={project.id}
                        style={{ background: project.bgColor }}
                      >
                        GitHub
                      </Button>
                    </a>
                  </section>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </StyledDiv>
  );
};

export default Projects;
