import { useState } from 'react'

import EmojiPickerInput from './components/emojiPickerInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1> Selector de emojis</h1>

       <EmojiPickerInput/>

      </div>
      
    </>
  )
}

export default App
