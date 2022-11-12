import './App.css'
import Child from './components/Child'
import { MenuProvider } from './context/MenuContext'

function App() {
  return (
    <div className="App">
      <Child />
    </div>
  )
}


export default function Index () {
  return (
    <MenuProvider>
      <App />
    </MenuProvider>
  )
}
