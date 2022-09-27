import * as muiStyles from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = muiStyles.styled(Button)`
  position: fixed;
  bottom: 1.25rem;
  right: 1.875rem;
  z-index: 99;
  padding: 5px 3px;
  border-radius: 0.625rem;


  &.on {
    opacity: 1;
    transition: opacity 0.1s linear;
  }

  &.off {
    opacity: 0;
    transition: opacity 0.1s linear;
  }
`;
