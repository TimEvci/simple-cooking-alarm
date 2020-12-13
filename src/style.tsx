import {makeStyles, createMuiTheme, responsiveFontSizes, unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';

let theme = createMuiTheme();
let fixWarn = unstable_createMuiStrictModeTheme();
theme = responsiveFontSizes(theme, {factor: 3});
export {theme,fixWarn};



export const useStyles = makeStyles({
    root: {
        background: "#032b43",
        height: "100vh"
    },
    heading:{
        color: "#e5e4e4",
        marginBottom: "3rem"
    },
    timer:{
        background: "#808080",
        padding: "2rem 3.2rem",
        borderRadius: "8px"
    },
    card: {
        background: "#e5e4e4",
        borderRadius: 20,
    },
    form:{
        margin: "2rem auto 1.5rem"
    },
    input:{
        height: "clamp(2.5rem,4vh,4rem)",
        fontSize: "clamp(1.5rem,3vw,2rem)",
        width:"clamp(4rem,8vw,5.2rem)",

    },
    icon:{
        fontSize: "clamp(2rem, 5vw,3rem)",
        color: "#000"
    }
});