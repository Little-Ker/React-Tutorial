import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './articalView.module.sass'

import Navbar from '../../component/navbar/Navbar'
import Artical from '../artical/Artical'
import Install from '../CRA/Install'
import Sass from '../basicKit/Sass'
import Eslint from '../basicKit/Eslint'
import Clsx from '../basicKit/Clsx'
import Prop from '../component/Prop'
import PropTypes from '../component/PropTypes'
import Hook from '../hooks/Hook'
import UseState from '../hooks/UseState'
import UseEffect from '../hooks/UseEffect'
import UseCallback from '../hooks/UseCallback'
import UseRef from '../hooks/UseRef'
import InstallRouter from '../router/InstallRouter'
import RouterNested from '../router/RouterNested'
import NestedChildA from '../router/nested/NestedChildA'
import NestedChildB from '../router/nested/NestedChildB'
import RouterHook from '../router/RouterHook'

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Artical/>} />
      <Route exact path="/install" element={<Install/>} />
      <Route exact path="/sass" element={<Sass/>} />
      <Route exact path="/eslint" element={<Eslint/>} />
      <Route exact path="/clsx" element={<Clsx/>} />
      <Route exact path="/prop" element={<Prop/>} />
      <Route exact path="/prop-types" element={<PropTypes/>} />
      <Route exact path="/hook" element={<Hook/>} />
      <Route exact path="/useState" element={<UseState/>} />
      <Route exact path="/useEffect" element={<UseEffect/>} />
      <Route exact path="/useCallback" element={<UseCallback/>} />
      <Route exact path="/useRef" element={<UseRef/>} />
      <Route exact path="/router" element={<InstallRouter/>} />
      <Route exact path="/routerNested/*" element={<RouterNested/>}>
          <Route path="*" element={<h3>???</h3>} />
          <Route path="A" element={<NestedChildA />} />
          <Route path="B" element={<NestedChildB />} />
      </Route>
      <Route exact path="/router-hook/:id/*" element={<RouterHook/>}></Route>
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