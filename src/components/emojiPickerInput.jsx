import { useRef } from "react";
import emojiPicker from "./emojiPicker";
import EmojiPicker from "./emojiPicker";
import styles from './emojiPiker.module.scss';

export default function EmojiPickerInput(){

    const refInput = useRef(null);
 


return(
<>
<h1 className={styles.mainTitle}> Selector de emojis</h1>

 <div>

 
 <input ref={refInput} className={styles.mainInput}/>

 <EmojiPicker ref={refInput}/> 

 </div>

 </>   
);
}

//use ref nos permite acceder a la referencia de un elemento


