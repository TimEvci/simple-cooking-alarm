//Convert time-string input to number
export const timeToNumber = (time: string) => {
    let convTime: Array<string> = time.split(":");
    let minutes: number = parseInt(convTime[0], 10);
    let seconds: number = convTime[1] ? parseInt(convTime[1], 10) : 0;
    return minutes * 60 + seconds;
}
//Convert number to time-string for re-render
export const numberToTime = (num: number) => {
    let seconds: number = num % 60;
    let minutes: number = Math.floor(num / 60);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

