import { createContext, useState, useEffect } from "react";

import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Game from './pages/Game'
import OptionAdmin from './pages/OptionAdmin'
import OptionUser from './pages/OptionUser'
import Headers from "./pages/Headers";
import AddRiddle from "./pages/AddRiddle";

type Riddle = {
  name: string,
  id: number
  taskDescription: string
  correctAnswer: string
}
type Riddles = Riddle[]

export const MyRiddle = createContext<null | Riddles>(null)
export const tokenContex = createContext<{ token: string; setToken: React.Dispatch<React.SetStateAction<string>>; }|null>(null)

function App() {

  const [token, setToken] = useState("")
  const [riddle, setRiddle] = useState<null | Riddles>([])

  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:3000/riddle")
      const arrRiddle = await data.json();
      setRiddle(arrRiddle)
    }
    getData()
  }, [])


  return (
    <div className="bodyPages ">
      <div className="mainPages"></div>
      <Headers />
      <tokenContex.Provider value={{token,setToken}}>
        <MyRiddle.Provider value={riddle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/optionAdmin" element={<OptionAdmin />} />
            <Route path="/optionUser" element={<OptionUser />} />
            <Route path="/play" element={<Game />} />
            <Route path="/addRiddle" element={<AddRiddle />} />
          </Routes>
        </MyRiddle.Provider>
      </tokenContex.Provider>

    </div>

  )
}

export default App
