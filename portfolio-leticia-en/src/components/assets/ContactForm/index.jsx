import { useRef, useState } from "react";
import { Alert, Button, Collapse, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Fade } from "react-reveal";
import { StyledDiv } from "./style";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [messageText, setMessageText] = useState("");

  const [fromNameError, setFromNameError] = useState(false);
  const [fromEmailError, setFromEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleNameChange = (event) => {
    setNameText(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailText(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessageText(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (nameText === "" || nameText === " ") {
      setFromNameError(true);
    }

    if (emailText === "" || emailText === " ") {
      setFromEmailError(true);
    }

    if (messageText === "" || messageText === " ") {
      setMessageError(true);
    }

    if (
      nameText !== "" &&
      nameText !== " " &&
      emailText !== "" &&
      emailText !== " " &&
      messageText !== "" &&
      messageText !== " "
    ) {
      setFromNameError(false);
      setFromEmailError(false);
      setMessageError(false);

      emailjs
        .sendForm(
          "service_pyzvf1r",
          "template_btdw9kb",
          e.target,
          "HXvWRlwCZ-viJRo3t"
        )
        .then(
          (result) => {
            setNameText("");
            setEmailText("");
            setMessageText("");
            setOpenSuccess(true);
            setTimeout(() => setOpenSuccess(false), 5000);
          },
          (error) => {
            setNameText("");
            setEmailText("");
            setMessageText("");
            setOpenError(true);
            setTimeout(() => setOpenError(false), 5000);
          }
        );
    }
  };

  return (
    <StyledDiv>
      <Fade bottom>
        <form onSubmit={sendEmail} ref={form}>
          <TextField
            variant="filled"
            label="Name"
            name="from_name"
            value={nameText}
            onChange={handleNameChange}
            error={fromNameError ? true : false}
            helperText={fromNameError ? "Please, enter your name." : null}
            sx={{
              bgcolor: "#292929",
              borderRadius: "4px 4px 0 0 ",
              width: "100%",
            }}
          />
          <TextField
            variant="filled"
            label="Email"
            name="from_email"
            value={emailText}
            onChange={handleEmailChange}
            error={fromEmailError ? true : false}
            helperText={fromEmailError ? "Please, enter your email." : null}
            sx={{
              bgcolor: "#292929",
              borderRadius: "4px 4px 0 0 ",
              width: "100%",
            }}
          />
          <TextField
            variant="filled"
            label="Message"
            name="message"
            value={messageText}
            onChange={handleMessageChange}
            error={messageError ? true : false}
            helperText={messageError ? "Please, enter a message." : null}
            multiline
            rows={5}
            sx={{
              bgcolor: "#292929",
              borderRadius: "4px 4px 0 0 ",
              width: "100%",
            }}
          />
          <Button variant="contained" sx={{ width: "100%" }} type="submit">
            Submit
          </Button>

          <Collapse in={openSuccess}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenSuccess(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 1 }}
            >
              Thanks for getting in touch!
            </Alert>
          </Collapse>

          <Collapse in={openError}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenError(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 1 }}
            >
              Ops! Something went wrong.
            </Alert>
          </Collapse>
        </form>
      </Fade>
    </StyledDiv>
  );
};

export default ContactForm;
