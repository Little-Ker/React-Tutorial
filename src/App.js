import './App.css'
import React, { useEffect } from "react"
import ArticalView from './view/articleView/ArticalView'
import './style/prism.css'
import Prism from 'prismjs'

function App() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="App">
      <ArticalView />
    </div>
  )
}

export default App