import Garden from './components/Garden/Garden'
import Storage from './components/Storage/Storage'
import Store from './components/Store/Store'
import styles from './App.module.sass'

function App() {
  return (
    <div className={styles.container}>
      <Garden />
      <Store />
      <Storage />
    </div>
  );
}

export default App;
