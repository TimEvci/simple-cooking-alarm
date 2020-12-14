import React from 'react';
import {CssBaseline, Box, Typography, ThemeProvider} from '@material-ui/core'
import {useStyles, theme, fixWarn} from "./style";
import TimerCard from "./components/TimerCard";


const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <ThemeProvider theme={fixWarn}>
                <ThemeProvider theme={theme}>
                    <Box display="flex" flexDirection="column"
                         justifyContent="center"
                         alignItems="center"
                         component="section"
                         className={classes.root}>
                        <Typography variant="h3" component="h1" className={classes.heading}>
                            Simple Cooking Alarm
                        </Typography>
                        <TimerCard/>
                    </Box>
                </ThemeProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
