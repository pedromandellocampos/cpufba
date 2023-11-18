import { useState } from 'react'
import './App.css'
import { CreateProcessButton } from './components/CreateButton'
import ProcessCard from './components/ProcessCard'
import styles from "./global.module.css"

function App() {
  const [count, setCount] = useState(0)
  const [processes, setProcesses] = useState([1,2,3,5, 6, 7, 8, 9])

  return (
    <div className={styles.pageContainer}>
            <CreateProcessButton />
    <div className={styles.processContainer2}>

      {processes.map(process => {
        return (<ProcessCard key={processes.indexOf(process)}/>)
      })}
    </div>
    </div>
  )
}

export default App
