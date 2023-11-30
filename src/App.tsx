import styles from "./App.module.css"
import Accordion from "./component/Accordion/Accordion"
import CountDown from "./component/CountDown/CountDown"
import Collapse from "./component/collapse/Collapse"
function App() {

  return (
    <div className={styles.container}>
     {/* <CountDown/> */}
     {/* <Collapse/>
     <Collapse/>
     <Collapse/> */}
     <Accordion/>
    </div>
  )
}

export default App
