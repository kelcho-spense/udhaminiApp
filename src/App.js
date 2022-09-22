import Header from './components/Header'
import { BrowserRouter ,Routes ,Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { Container } from 'postcss';
import ProfileEdit from './pages/ProfileEdit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="register" element={<Register />} />
         <Route path="login" element={<Login />} />
         <Route path="profile/:userId" element={<Profile />} />
         <Route path="profile/update/:userId" element={<ProfileEdit />} />
         <Route path="*" 
              element={
                        <div className='shadow-lg grid place-self-center mt-20 py-20 w-3/4 mx-auto text-white  justify-center text-center'>
                          <p className='text-7xl pt-3 m-3'>😮404😮</p>
                          <p className='text-lg  m-2'>There's nothing here!</p>
                          <Link className='btn btn-accent text-2xl' to="/">🏡Home</Link>
                        </div>
              }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
