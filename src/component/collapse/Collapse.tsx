import { useState } from "react";
import styles from "./collapse.module.scss";
import PlusMinusComponent from "./PlusMinusComponent";
type Props = {};

const Collapse = (props: Props) => {
    const [isOpen, setisOpen] = useState(false)
    function toggleVisibility(){
        setisOpen((prev)=>!prev)
    }
  return (
    <div className={styles.collapse_container}>

      <div className={styles.collapse_header} onClick={toggleVisibility}>
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
  );
};

export default Collapse;
