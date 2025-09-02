
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SingUp from './pages/SignUp'
import Game from './pages/Game'
import Option from './pages/Option'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SingUp />} />
        <Route path='/play' element={<Game />} />
        <Route path='option' element={<Option/>}/>
      </Routes>
    </div>
  )
}

export default App
