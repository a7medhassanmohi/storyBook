import styles from "./App.module.css"
import CountDown from "./component/CountDown/CountDown"
function App() {

  return (
    <div className={styles.container}>
     <CountDown/>
    </div>
  )
}

export default App
