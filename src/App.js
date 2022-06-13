import Home from "./Components/Pages/Home";
import Header from "./Components/Header/Header";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./Components/AboutUs/AboutUs";
import Courses from "./Components/Courses-section/Courses";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
  <div> 
  <BrowserRouter>
  <Header/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
   
    </Routes>
    <Footer />
  </BrowserRouter>
</div>
  )
}

export default App;