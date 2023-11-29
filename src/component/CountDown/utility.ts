function padTo2Digits(num:number) {
  return num.toString().padStart(2, '0');
}

 export function convertMinutesToMinutesAndSecond(time:number){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    return result
}