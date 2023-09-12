import { useState } from 'react'

import EmojiPickerInput from './components/emojiPickerInput'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
       <EmojiPickerInput/>

      </div>
      
    </>
  )
}

export default App
