import { Route, Routes } from 'react-router-dom'
import Homepage from './home/Homepage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
