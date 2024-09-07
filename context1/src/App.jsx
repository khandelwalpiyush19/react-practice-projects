 import './App.css'
import Profile from './components/profile' 
import Login from './components/login'
import UserContextProvider from'./Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
       <h1>i m the best</h1>
        <Profile/>
        <Login/>
    </UserContextProvider>
  )
}

export default App
