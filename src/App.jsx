import "./App.css";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeCollection from "./pages/RecipeCollection/RecipeCollection";
import RecipePage from "./pages/RecipePage/RecipePage";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/recipes" Component={RecipeCollection} />
          <Route path="/recipes/:id" Component={RecipePage} />
          <Route path="/newrecipe" Component={CreateRecipe} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
