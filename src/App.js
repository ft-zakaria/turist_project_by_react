import "./styles.css";
import Home from "./routs/Home";
import About from "./routs/About";
import Service from "./routs/Service";
import Contact from "./routs/Contact";
import SignUp from "./routs/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {

   return (
    <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/service" element={<Service/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </>
   );
}

export default App; 
