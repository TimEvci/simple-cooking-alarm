import React, {useRef, useState} from 'react';
import {CssBaseline, Box, Card, CardContent, IconButton, Typography, Input} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

//Init Styles
const useStyles = makeStyles({
    root: {
        background: "#032b43",
        height: "100vh"
    },
    card: {
        minWidth: 600,
        minHeight: 400,
    }
});

const App = () => {
    //Necessary to clear the interval
    let interval = useRef(0);
    //Set Styles Here
    const classes = useStyles();
    //Set Initial States Using Hooks
    const [time, setTime] = useState("00:00")
    const [click, setClick] = useState(false)


    //Convert time-string input to number
    const timeToNumber = (time: string) => {
        let convTime: Array<string> = time.split(":");
        let minutes: number = parseInt(convTime[0], 10);
        let seconds: number = convTime[1] ? parseInt(convTime[1], 10) : 0;
        return minutes * 60 + seconds;
    }
    //Convert number to time-string for re-render
    const numberToTime = (num: number) => {
        let seconds: number = num % 60;
        let minutes: number = Math.floor(num / 60);
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

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
                    alert("Timer is up!!!")
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
            <Box display="flex" flexDirection="column"
                 justifyContent="center"
                 alignItems="center"
                 component="section"
                 className={classes.root}>
                <Card className={classes.card} component="section">
                    <CardContent>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" m={5}>
                            <Typography variant="h3" component="h1">Simple Cooking Alarm</Typography>
                            <Typography variant="h1" component="h2">{time}</Typography>
                            <Box display="flex" justifyContent="center" alignItems="center" m={4}>
                                <Input type="time" value={time}
                                       onChange={(e: any) => {
                                           setTime(e.target.value);
                                       }}
                                />
                                <IconButton aria-label="play-pause" onClick={handlePlay} type="submit">
                                    {click ? <PauseCircleOutlineIcon fontSize="large"/> :
                                        <PlayCircleOutlineIcon fontSize="large"/>}
                                </IconButton>
                                <IconButton aria-label="reset" onClick={handleReset}>
                                    <RotateLeftIcon fontSize="large"/>
                                </IconButton>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default App;
