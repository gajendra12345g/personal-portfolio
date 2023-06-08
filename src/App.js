import './App.css';
// import Footer from './Components/Footer';
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About';
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
   <>
        <BrowserRouter>
<Routes>
    <Route exact path="/" element ={<Header/>} />
    <Route exact path="/hero" element ={<Hero/>} />
    <Route exact path="/About" element={<About/>} />
    <Route exact path="/services" element={<Services/>} />
    <Route exact path="/contact" element={<Contact/>} />

</Routes>
        </BrowserRouter>
        
        </>
  );
}
export default App;
