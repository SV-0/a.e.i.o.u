import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    signInBtn: {
        backgroundColor: "#ff5050",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#cc5050",
        },
        "&:focus": {
            backgroundColor: "#cc5050",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0.5rem 0.2rem"
        },
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    purple: {
        color: theme.palette.getContrastText("#0062ff"),
        backgroundColor: "#0062ff",
    },
    icon: {
        padding: "0",
    },
    button: {
        "&:hover": {
            backgroundColor: "#ececec",
        },
        "&:focus": {
            backgroundColor: "#ececec",
        },
        "&:active": {
            backgroundColor: "#ececec",
        }
    },
}));