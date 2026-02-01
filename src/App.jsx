import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Workspace from './pages/Workspace';
import Login from './pages/Login';
import MainLayouts from './components/layouts/MainLayouts';
import General from './pages/settings/General';
import SettingsLayout from './components/layouts/SettingsLayout';
import AIModels from './pages/settings/AIModels';
import History from './pages/settings/History';
import BillingPlan from './pages/settings/BillingPlan';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Shop from './pages/Shop';

function App() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/settings" element={<SettingsLayout />} >
          <Route path="/settings" index element={<General />} />
          <Route path="/settings/ai-models" element={<AIModels />} />
          <Route path="/settings/history" element={<History />} />
          <Route path="/settings/billing-plan" element={<BillingPlan />} />
        </Route>
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
