import { forwardRef, useRef, useState } from "react";

//importa el arreglo pero no lo hace reactivo
import {data as emojiList} from "./emojiPicker/data";


export function EmojiPicker(props, inputRef){

 const [isOpen, setIsOpen]= useState(true);
 //esto es para hacer la lista reactiva
 const [emojis, setEmojis] = useState(emojiList);



function EmojiPickerContainer(){

    return (
    
    <div>
      <input />
      <div>
        {
         emojiList.map((emoji) => (
         <div>{emoji.symbol}</div>
         
         ))}

      </div>
    

    </div>

)}



return(

<div>

 <button>😊️</button>

 {isOpen? <EmojiPickerContainer/>: ""}
</div>

); 
    


}



//export default forwardRef((props,inputRef) =>{

//})

export default forwardRef(EmojiPicker);




    


    




