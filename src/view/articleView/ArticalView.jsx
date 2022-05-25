import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './articalView.module.sass'

import Navbar from '../../component/navbar/Navbar'
import Artical from '../artical/Artical'
import Install from '../CRA/Install'
import Sass from '../basicKit/Sass'
import Eslint from '../basicKit/Eslint'

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Artical/>} />
      <Route exact path="/install" element={<Install/>} />
      <Route exact path="/sass" element={<Sass/>} />
      <Route exact path="/eslint" element={<Eslint/>} />
      <Route path="*" element={<Artical/>} />
    </Routes>
  )
}
 
function ArticalView() {
  return (
    <Router>
      <Navbar />
      <div className={styles.articalView}>
        <div className='container1200'>
            <RouterPage />
        </div>
      </div>
    </Router>
  )
}
 
export default ArticalView