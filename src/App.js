import React, { useContext, useEffect } from 'react'
import Garden from './components/Garden/Garden'
import Storage from './components/Storage/Storage'
import Store from './components/Store/Store'
import styles from './App.module.sass'
import { HarvestTimeContext } from './context/context'


function App() {

  const { timer } = useContext(HarvestTimeContext)

  useEffect(() => {
    timer()
    let interval
    interval = clearInterval()
    interval = setInterval(timer, 5000)
  }, [])

  return (
    <div className={styles.container}>
      <Garden />
      <Store />
      <Storage />
    </div>
  );
}

export default App;
