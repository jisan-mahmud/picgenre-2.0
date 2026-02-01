import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Workspace from './pages/Workspace';
import Login from './pages/Login';
import MainLayouts from './components/layouts/MainLayouts';

function App() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
