import { BrowserRouter, Routes, Route } from "react-router-dom";

import MangerZustand from './pages/statemanager-zustand'
import MangerContext from './pages/statemanager-context'
import MangetContextSelector from './pages/statemanager-context-selector'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manager-context" element={<MangerContext />}></Route>
        <Route path="/manager-context-selector" element={<MangetContextSelector />}></Route>
        <Route path="/manager-zustand" element={<MangerZustand />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
