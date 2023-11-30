import React from 'react'
import styles from "./accordion.module.scss"

type Props = {
    isOpen:boolean
}

const PlusMinusComponent = ({ isOpen}: Props) => {
    
  return (
    <div className={`${styles.plusminus} ${isOpen ? styles.active : ""}`}></div>
  )
}

export default PlusMinusComponent