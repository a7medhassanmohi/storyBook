import { useState } from "react"
import AccordionItem from "./AccordionItem"
import styles from "./accordion.module.scss"
type Props = {}

const Accordion = (props: Props) => {
    const [selectedAccordion, setSelectedAccordion] = useState<number | null>(null)
    function toggleVisibility(e:React.MouseEvent<HTMLDivElement, MouseEvent>,i:number){
        if(i===selectedAccordion){
        setSelectedAccordion(null)
        }else{
            setSelectedAccordion(i)
        }
    }
  return (
    <div className={styles.accordion_container}>
  <AccordionItem
  toggleVisibility={(e)=>toggleVisibility(e,1)}
  isOpen={1===selectedAccordion}
  />
   <AccordionItem
  toggleVisibility={(e)=>toggleVisibility(e,2)}
  isOpen={2===selectedAccordion}
  />

    </div>
  )
}

export default Accordion