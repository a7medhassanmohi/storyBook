import  { useEffect, useState } from "react";
import styles from "./count.module.css";
import { BsHourglassTop } from "react-icons/bs";
import Timer from "./Timer";
import { convertMinutesToMinutesAndSecond } from "./utility";

type Props = {};

const CountDown = (props: Props) => {
  const [time, settime] = useState(10)
  const timerValue=convertMinutesToMinutesAndSecond(time)
  useEffect(()=>{
      let intervalValue:NodeJS.Timeout | undefined;
      if( time>0 ){
          intervalValue=setInterval(()=>{
               settime((prev)=>prev-1)
          },1000)
      }else{
          clearInterval(intervalValue)
      }
      return()=>{
          clearInterval(intervalValue)
      }
  },[time])
  return (
    <div className={styles.timer_container}>
      <div className={`${time>0?styles.start:styles.stop} ${styles.icon}`}>
        <BsHourglassTop />
      </div>
        <Timer timerValue={timerValue} />
    </div>
  );
};

export default CountDown;
