import './App.css'
import Home from './pages/Home';
import { Routes, Route } from "react-router";
import Workspace from './pages/Workspace';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/workspace' element={<Workspace/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
