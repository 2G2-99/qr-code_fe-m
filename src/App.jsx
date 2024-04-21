import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    Improve your front-end skills by building projects Scan the QR code to visit
    Frontend Mentor and take your coding skills to the next level

    <footer>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Santiago Gomez</a>.
      </div>
    </footer>
  </div>
    </>
  )
}

export default App
