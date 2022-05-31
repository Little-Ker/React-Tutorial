import React, { useContext } from 'react'
import { ThemeContext } from '../../../view/hooks/UseContext'
import styles from '../../../view/hooks/useContext.module.sass'


const UseContextContent = () => {
  const darkTheme = useContext(ThemeContext)
  
  const themeStyle = {
    backgroundColor: darkTheme ? '#2c3e50': '#f1c40f',
    color: darkTheme ? '#ecf0f1' : '#2c3e50'
  }
  
  return (
    <div style={themeStyle} className={styles.bg}>useContext</div>
  )
}

export default UseContextContent