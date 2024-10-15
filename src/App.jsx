import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Firstpage from './components/Firstpage'
import Secondpage from './components/Secondpage'

export const DataContext = createContext()

function App() {
  const [pincode, setPincode] = useState(0)

  return (
    <DataContext.Provider value={{pincode,setPincode}}>
    <Routes>
      <Route path='' element={<Firstpage/>} />
      <Route path='/pincode' element={<Secondpage/>} />
    </Routes>
    </DataContext.Provider>
  )
}

export default App
