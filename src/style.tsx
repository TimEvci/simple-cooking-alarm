import {makeStyles, createMuiTheme, responsiveFontSizes, unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';

let theme = createMuiTheme({
    overrides:{
        MuiSvgIcon:{
            root:{
                fontSize: "clamp(2rem, 5vw,3rem)",
                color: "#000"
            },
        },
        MuiInputBase:{
            root:{
                height: "clamp(2.5rem,4vh,4rem)",
                fontSize: "clamp(1.5rem,3vw,2rem)",
                width:"clamp(4rem,8vw,5.2rem)",
            }
        },
        MuiFormHelperText:{
            root:{
                textAlign: "center",
                fontSize: "clamp(0.6rem,1.5vw,0.75rem)",
                color:"#000"
            }
        }

    }
});

let fixWarn = unstable_createMuiStrictModeTheme();
theme = responsiveFontSizes(theme, {factor: 3});

const useStyles = makeStyles({
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
    }
});

export {useStyles,theme,fixWarn};