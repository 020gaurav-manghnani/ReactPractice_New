import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import LoginContextProvider from './contexts/LoginContextProvider'

function App() {
  

  return (
    <LoginContextProvider>
      <h1>Signup page</h1>
      <br></br>
      <Login />
      <br></br>
      <Profile />
    </LoginContextProvider>
  )
}

export default App