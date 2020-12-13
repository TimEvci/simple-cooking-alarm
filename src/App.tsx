import React, {useRef, useState} from 'react';
import {
    CssBaseline,
    Box,
    Card,
    CardContent,
    IconButton,
    Typography,
    Input,
    FormControl,
    Fade,
    ThemeProvider
} from '@material-ui/core'
import {useStyles, theme, fixWarn} from "./style";
import {timeToNumber, numberToTime} from './Helper'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import MaskedInput from "./components/MaskedInput";


const App = () => {
    //Necessary to clear the interval
    let interval = useRef(0);
    //Set Styles Here
    const classes = useStyles();
    //Set Initial States Using Hooks
    const [time, setTime] = useState("00:00")
    const [click, setClick] = useState(false)

    let totalSeconds = timeToNumber(time)
    const handlePlay = () => {
        setClick(!click)
        if (!click && totalSeconds !== 0) {
            interval.current = window.setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds = totalSeconds - 1;
                } else {
                    clearInterval(interval.current)
                    setClick(false)
                    alert("Time is up!!!")
                }
                setTime(numberToTime(totalSeconds))
            }, 1000)
        } else {
            setClick(false)
            clearInterval(interval.current)
        }
    }

    const handleReset = () => {
        setTime("00:00");
        setClick(false)
        clearInterval(interval.current)
    }

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
                        <Typography variant="h3" component="h1" className={classes.heading}>Simple Cooking
                            Alarm</Typography>
                        <Card className={classes.card} component="section">
                            <CardContent>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                                     m={3}>
                                    <Typography variant="h1" component="h2" className={classes.timer}>
                                        {time === '' ? "00:00" : time}
                                    </Typography>
                                    <FormControl className={classes.form} component="form">

                                        <Fade in={!click} timeout={800}>
                                            <Input type="text" value={time}
                                                   inputComponent={MaskedInput}
                                                   className={classes.input}
                                                   onChange={(e: any) => {
                                                       let timeFormat = e.target.value;
                                                       setTime(timeFormat);
                                                   }}/>
                                        </Fade>

                                    </FormControl>
                                    <Box>
                                        <IconButton aria-label="play-pause" onClick={handlePlay}>
                                            {click ? <PauseCircleOutlineIcon className={classes.icon}/> :
                                                <PlayCircleOutlineIcon className={classes.icon}/>}
                                        </IconButton>
                                        <IconButton aria-label="reset" onClick={handleReset}>
                                            <RotateLeftIcon className={classes.icon}/>
                                        </IconButton>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </ThemeProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
