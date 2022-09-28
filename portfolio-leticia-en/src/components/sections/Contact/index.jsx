import { Divider, SvgIcon } from "@mui/material";
import { Bounce, Fade } from "react-reveal";
import { StyledDiv } from "./style";
import ContactForm from "../../assets/ContactForm";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <StyledDiv className="contact">
      <div className="contact-innerDiv">
        <div className="contact-title">
          <Fade left duration={1000}>
            <h2>Contato</h2>
          </Fade>
          <Fade right duration={1000}>
            <Divider className="divider" />
          </Fade>
        </div>
        <ContactForm />
        <Bounce cascade>
          <div className="links">
            <a
              href="https://github.com/leticia-de-araujo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon component={SiGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/leticia-de-araujo-nunes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon component={SiLinkedin} />
            </a>
          </div>
        </Bounce>
      </div>
    </StyledDiv>
  );
};

export default Contact;
