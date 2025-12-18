import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
         
      </BrowserRouter>
    </>
  )
}

export default App
