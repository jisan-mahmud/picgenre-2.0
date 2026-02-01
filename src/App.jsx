import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Workspace from './pages/Workspace';
import Login from './pages/Login';
import MainLayouts from './components/layouts/MainLayouts';
import General from './pages/settings/General';
import SettingsLayout from './components/layouts/SettingsLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/settings" element={<SettingsLayout />} >
          <Route path="/settings" index element={<General />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
