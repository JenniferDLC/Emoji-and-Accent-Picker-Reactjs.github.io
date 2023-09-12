import { useState } from "react";
import emojiPicker from "../emojiPicker";
import styles from "../emojiPiker.module.scss";




export default function AccentButton ({accent, onClick}){


   function handleClick(e){

    onClick(accent); 


    }



return <button onClick={handleClick} className={styles.accentButton}>{accent.Symbol}</button>;

}