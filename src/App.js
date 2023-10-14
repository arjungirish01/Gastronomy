import './App.css';
import Home from "./components/Home.js"
import {Route,Routes} from "react-router-dom"
import Recipe from "./components/Recipe.js";
import data from "./data";

function App() {
  const recipeElements=data.map(item=>(
    <Route path={`/recipe/${item.id}`} element={<Recipe itemId={item.id} key={item.id}/>} />
  ))
  return (
    <div className="main-container">
      <Routes>
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipe />} />
            {recipeElements}
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;