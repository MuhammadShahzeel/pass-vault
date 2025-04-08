
// App.jsx
import './App.css'
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <Navbar/>
      <div className="flex-1">
        <Manager/>
      </div>
    </div>
  )
}

export default App