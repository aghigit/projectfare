import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={<Auth/>}></Route>
      <Route path='/register' element={<Auth insideRegister/>}></Route>
      <Route path='dashboard' element={<Dashboard/>}></Route>
      <Route path='projects' element={<Projects/>}></Route> 
       <Route path='/*' element={<Navigate to={'/'} />}></Route>
    </Routes>
    </>
  )
}

export default App
