import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import UserActivity from './components/UserActivity'

function App() {

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <UserActivity />
      </div>
    </div>
  )
}

export default App
