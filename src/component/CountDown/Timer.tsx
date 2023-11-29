import styles from "./count.module.css"
type Props = {
    timerValue:string
}

const Timer = ({timerValue}: Props) => {
  return (
    <div className={styles.timer}>
{timerValue}
    </div>
  )
}

export default Timer