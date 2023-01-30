import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './Body';
import Project from './Project';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Body/>]} />
      <Route path='/projects' element = {[<Project/>]}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
