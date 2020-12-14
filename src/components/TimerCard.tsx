import React, {useRef, useState} from 'react';
import {Box, Card, CardContent, Fade, FormControl, IconButton, TextField, Typography} from "@material-ui/core";
import MaskedInput from "./MaskedInput";
import {useStyles} from "../style";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import {numberToTime, timeToNumber} from "../Helper";


const TimerCard = () => {
    //Necessary to clear the interval
    let interval = useRef(0);
    //Set Initial States Using Hooks
    const [time, setTime] = useState("00:00")
    const [isRunning, setRunning] = useState(false)
    //Set Styles Here
    const classes = useStyles();
    //Calculate total number of seconds
    let totalSeconds = timeToNumber(time)
    const toggleTimer = () => {
        setRunning(!isRunning)
        if (!isRunning && totalSeconds !== 0) {
            interval.current = window.setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds = totalSeconds - 1;
                } else {
                    clearInterval(interval.current)
                    setRunning(false)
                    alert("Time is up!!!")
                }
                setTime(numberToTime(totalSeconds))
            }, 1000)
        } else {
            setRunning(false)
            clearInterval(interval.current)
        }
    }

    const handleReset = () => {
        setTime("00:00");
        setRunning(false)
        clearInterval(interval.current)
    }

    return (
        <>
            <Card className={classes.card} component="section">
                <CardContent>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                         m={3}>
                        <Typography variant="h1" component="h2" className={classes.timer}>
                            {time === '' ? "00:00" : time}
                        </Typography>
                        <FormControl className={classes.form} component="form">
                            <Fade in={!isRunning} timeout={800}>
                                <TextField type="text"
                                           value={time}
                                           helperText="Set the timer"
                                           InputProps={{inputComponent: MaskedInput}}
                                           onChange={(e: any) => {
                                               let timeFormat = e.target.value;
                                               setTime(timeFormat);
                                           }}/>
                            </Fade>
                        </FormControl>
                        <Box>
                            <IconButton aria-label="play-pause"
                                        onClick={toggleTimer}>
                                {isRunning ? <PauseCircleOutlineIcon/> :
                                    <PlayCircleOutlineIcon/>}
                            </IconButton>
                            <IconButton aria-label="reset" onClick={handleReset}>
                                <RotateLeftIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default TimerCard;