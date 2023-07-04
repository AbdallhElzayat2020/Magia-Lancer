
import { Routes, Route, } from "react-router-dom";

import './App.css'
import Home from "./Components/Home/Home";
import Navbar from "./Components/header/Navbar";
import About from "./Components/About/about";
import Jobs from "./Components/Jobs/Jobs";
import Projects from "./Components/Projects/Projects";
import Login from "./Components/Login/Login";
function App() {

  return (
<div className="App">
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/jobs" element={<Jobs/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</div>
  )
}

export default App;
