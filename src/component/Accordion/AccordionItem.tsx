import PlusMinusComponent from "./PlusMinusComponent"
import styles from "./accordion.module.scss"

type Props={
    toggleVisibility:(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    isOpen:boolean
}
const AccordionItem = ({toggleVisibility,isOpen}:Props) => {
  return (
    <div className={styles.accordion_item}>
          <div className={styles.collapse_header} onClick={(e)=>toggleVisibility(e)}>
        collapse header
        <PlusMinusComponent isOpen={isOpen}/>
      </div>
      <div className={`${styles.collapse_content_wrapper} ${isOpen?styles.open:styles.close}` }>

      <div className={`${styles.collapse_content} `}>
        <p>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        itaque excepturi quidem hic maxime natus omnis assumenda? Veritatis
        ipsum accusantium sed amet unde eius voluptas tempore placeat magni 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellat, doloremque sed non ipsum explicabo possimus maxime sunt assumenda? Reiciendis aliquam culpa esse illum iure saepe enim cum blanditiis minima!cum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe debitis quasi, distinctio nisi facere voluptatem placeat laborum culpa, cupiditate laboriosam alias! Nulla magnam quia nostrum inventore voluptatibus cupiditate consequatur!
        Consectetur?
        </p>
      </div>
      </div>
    </div>
  )
}

export default AccordionItem