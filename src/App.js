import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import SharedLayout from './Pages/SharedLayout';
import Blog from './Pages/Blog';
import AboutUs from './Pages/AboutUs';
import Error404 from './Pages/Error404';
import OurTeam from './Pages/OurTeam';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
     
    
     <Route path='/' element={<SharedLayout />} >
 
    
           
           
           <Route index element={<Home/>} />
           <Route path='Error404' element={<Error404 /> } />
           <Route path='OurTeam' element={<OurTeam /> } />
           <Route path='AboutUs' element={<AboutUs /> } />
           <Route path='Contact' element={<Contact /> } />
           <Route path='Blog' element={<Blog /> } />
     
    
     </Route>
    
     </Routes>
     </BrowserRouter>

  );
}

export default App;
