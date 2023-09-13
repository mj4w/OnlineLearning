import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/Signup'
import Bookmarks from './components/Bookmarks'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
