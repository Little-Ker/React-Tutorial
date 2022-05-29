import React from "react"
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './articalView.module.sass'

import Navbar from '../../component/navbar/Navbar'
import ScrollBtn from '../../component/scrollBtn/ScrollBtn'
// import Artical from '../artical/Artical'
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
import RouterMode from '../router/RouterMode'
import InstallRedux from '../redux/InstallRedux'
import ReduxState from '../redux/ReduxState'
import ReduxAsyncState from '../redux/ReduxAsyncState'
import ReduxAxios from '../redux/ReduxAxios'
import GitPages from '../gitPages/GitPages'
import GitPagesBug from '../gitPages/GitPagesBug'
import Axios from '../otherKit/Axios'
import Mock from '../otherKit/Mock'
import MaterialUI from '../otherKit/MaterialUI'
import Swiper from '../otherKit/Swiper'
import FontStyles from '../otherKit/FontStyles'

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Install/>} />
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
      <Route exact path="/routerMode" element={<RouterMode/>} />
      <Route exact path="/redux-install" element={<InstallRedux/>} />
      <Route exact path="/redux-state" element={<ReduxState/>} />
      <Route exact path="/redux-asyncState" element={<ReduxAsyncState/>} />
      <Route exact path="/redux-axios" element={<ReduxAxios/>} />
      <Route exact path="/gitPages" element={<GitPages/>} />
      <Route exact path="/gitPagesBug" element={<GitPagesBug/>} />
      <Route exact path="/axios" element={<Axios/>} />
      <Route exact path="/mock" element={<Mock/>} />
      <Route exact path="/materialUI" element={<MaterialUI/>} />
      <Route exact path="/swiper" element={<Swiper/>} />
      <Route exact path="/font" element={<FontStyles/>} />
      <Route path="*" element={<Install/>} />
    </Routes>
  )
}
 
function ArticalView() {
  return (
    <Router>
      <Navbar />
      <ScrollBtn />
      <div className={styles.articalView}>
        <div className='container1200'>
            <RouterPage />
        </div>
      </div>
    </Router>
  )
}
 
export default ArticalView