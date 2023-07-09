import { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import Chord from './components/Chord'
import axios from 'axios'
const baseUrlAll = 'http://localhost:8000/'

function App() {
  const [newResults, setNewResults] = useState(null)
  const [timeStamp, setTimeStamp] = useState('')

  useEffect(() => {
    axios.get(baseUrlAll)
      .then(response => {
        setNewResults(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(newResults)

  const handleTimeStampChange = (event) => {
    console.log(event.target.value)
    setTimeStamp(event.target.value)
  }

  return (
    <div>
      <h1>Awwchord</h1>
      <Filter newFilter={timeStamp} handleTimeStampChange={handleTimeStampChange} />
      <Chord newResults={newResults} timeStamp={timeStamp} />
    </div>
  );
}

export default App
