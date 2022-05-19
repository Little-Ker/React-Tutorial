import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './articalView.module.sass'

import Navbar from '../../component/navbar/Navbar'
import Artical from '../artical/Artical'

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Artical/>} />
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