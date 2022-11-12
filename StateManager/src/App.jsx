import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter01 from "./pages/count/counter-use-state";
import Counter02 from "./pages/count/counter-ctx-use-state";
import Counter03 from "./pages/count/counter-ctx-use-reducer";

import MangerZustand from './pages/statemanager/statemanager-zustand'
import MangerContext from './pages/statemanager/statemanager-context'
import MangetContextSelector from './pages/statemanager/statemanager-context-selector'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter-01" element={<Counter01 />}></Route>
        <Route path="/counter-02" element={<Counter02 />}></Route>
        <Route path="/counter-03" element={<Counter03 />}></Route>
        <Route path="/manager-context" element={<MangerContext />}></Route>
        <Route path="/manager-context-selector" element={<MangetContextSelector />}></Route>
        <Route path="/manager-zustand" element={<MangerZustand />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
