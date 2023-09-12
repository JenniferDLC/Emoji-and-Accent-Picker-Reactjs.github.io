import { forwardRef, useRef, useState, useEffect } from "react";

//importa el arreglo pero no lo hace reactivo
import {data as emojiList} from "./emojiPicker/data";
import {data2 as accentList} from "./emojiPicker/data2";
import EmojiSearch from "./emojiSearch";
import EmojiButton from "./emojiButton";


import styles from "./emojiPiker.module.scss";
import AccentSearch from "./emojiPicker/accentSearch";
import AccentButton from "./emojiPicker/accentButton ";




export function EmojiPicker(props, inputRef){

 const [isOpen, setIsOpen]= useState(false);
 const [isOpenaccent, setIsOpenAccent]= useState(false);
 //esto es para hacer la lista reactiva
 const [emojis, setEmojis] = useState([...emojiList]);
 const [accent, setAccent] = useState([...accentList]);

 const containerRef = useRef(null);

 useEffect(()=>{

  window.addEventListener("click",(e) => {
   
    //si no es el elemento padre
   if (!containerRef.current.contains(e.target)) {

    setIsOpen(false);
    setEmojis(emojiList);
    setIsOpenAccent(false);
    setAccent(accentList);
   
   }

  });
  
 },[]);



/*function EmojiPickerContainer(){

    return (
    
    <div>
      <EmojiSearch onSearch={handleSearch} />
      <div>
        {
         emojiList.map((emoji) => (
         <div key={emoji.symbol}>{emoji.symbol}</div>
         
         ))}

      </div>
    

    </div>

)}*/


function handleClickOpen(){

 setIsOpen(!isOpen);
 setIsOpenAccent(false);
 //setIsOpen(!isOpen);

}

function handleClickOpenAccentButton(){

 setIsOpenAccent(!isOpenaccent);
 setIsOpen(false);
 //setIsOpenAccent(!isOpenaccent);


}

function handleSearch(e){

  // const q = e.target.value.toLowerCase();
   const q = e;
 
   //si existe un valor o si es verdadero
   if(!!q){
 
     const search = emojiList.filter((emoji) => {
 
       return(
         emoji.name.toLowerCase().includes(q) || 
         emoji.keywords.toLowerCase().includes(q)
         );
     });
 
     setEmojis(search);
 
 
   } else {
 
   //refrescar la lista en el estado
   setEmojis(emojiList);
 
 
   }
  

 }
 

 function handleSearchAccent(e){

  const h = e;

  if (!!h){

 const search = accentList.filter((acent)=>{
  
  return(
   
    
    acent.keywords.includes(h)
   

  );

 });

 setAccent(search);


} else {

setAccent(accentList);


}

}





 function handleOnClickEmoji(emoji){

  const cursorPos = inputRef.current.selectionStart;
  const text = inputRef.current.value;
  const prev = text.slice(0, cursorPos);
  const next = text.slice(cursorPos);

  inputRef.current.value = prev + emoji.symbol + next;
  inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
  inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
  inputRef.current.focus();



 }

 function handleOnClickAccent(accent){

  const cursorPos = inputRef.current.selectionStart;
  const text = inputRef.current.value;
  const prev = text.slice(0, cursorPos);
  const next = text.slice(cursorPos);

  inputRef.current.value = prev + accent.Symbol + next;
  inputRef.current.selectionStart = cursorPos + accent.Symbol.length;
  inputRef.current.selectionEnd = cursorPos + accent.Symbol.length;
  inputRef.current.focus();



 }




return(

<div ref={containerRef} className={styles.inputContainer}>

 <button onClick={handleClickOpen} className={styles.emojiPickerButton}>😊️</button>
 <button onClick={handleClickOpenAccentButton}>~</button>
<div>
 {isOpen?(

  
    
    <div className={styles.emojiPickerContainer}>
      <EmojiSearch onSearch={handleSearch}/>
  
      <div className={styles.emojiList}>
        {emojis.map((emoji) => (

         <EmojiButton 
         key={emoji.symbol} 
         emoji={emoji} 
         onClick={handleOnClickEmoji}  
         />
        
         
         ))}

      </div>
    </div>

):("")}
</div>

<div>
{isOpenaccent?(

  

 <div className={styles.accentPickerContainer}>
  <AccentSearch onSearch={handleSearchAccent} />

  <div className={styles.accentList}>
   
   {accent.map((acent)=>(

    <AccentButton
     key={accent.Symbol}
     accent={acent}
     onClick={handleOnClickAccent}
    
    />

    

   ))}


  </div>

 </div>

):("")}

</div>

</div>

);
  
}


//export default forwardRef((props,inputRef) =>{

//})

export default forwardRef(EmojiPicker);




    


    




