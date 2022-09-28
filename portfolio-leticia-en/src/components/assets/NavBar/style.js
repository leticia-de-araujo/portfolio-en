import * as muiStyles from "@mui/material/styles";
import { AppBar, Box } from "@mui/material";

export const StyledAppBar = muiStyles.styled(AppBar)`
    width: 100%;
    background-color: #070707;
    position: fixed;
    color: white;
    border-bottom: 2px solid #eb5757;

    .ul-desktop {
        list-style: none;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        gap: 5rem;
        justify-content: center;
    }

`;

export const StyledBox = muiStyles.styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;

    .ul-mobile {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }
`;
