import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './articalView.module.sass'

import Artical from '../artical/Artical'

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Artical/>} />
      <Route exact path="artical" element={<Artical/>} />
      <Route path="*" element={<Artical/>} />
    </Routes>
  )
}
 
function ArticalView() {
  return (
    <div className={styles.articalView}>
      <div className='container1200'>
        <Router>
          <RouterPage />
        </Router>
      </div>
    </div>
  )
}
 
export default ArticalView