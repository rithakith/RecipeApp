import "./App.css";
import "./index.css";

import { Route, Routes, BrowserRouter,redirect} from "react-router-dom";
import { useAuthContext } from "./Hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeCollection from "./pages/RecipeCollection/RecipeCollection";
import RecipePage from "./pages/RecipePage/RecipePage";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { authIsReady, user } = useAuthContext();
  
  if (!authIsReady) {
    // Render loading state or spinner while authentication is being checked
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<RecipeCollection />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="/newrecipe" element={<CreateRecipe />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/signup" element={user ? <Navigate to="/home" /> : <Navigate to="/signup" />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



