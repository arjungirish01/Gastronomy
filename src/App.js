import './App.css';
import Home from "./components/Home.js"
import {Route,Routes} from "react-router-dom"
import Header from "./components/Header.js";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;