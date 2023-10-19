import { Route, Routes } from "react-router-dom";
import MenuNav from "./components/MenuNav";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import Detalles from "./views/Detalles";
import NotFound from "./views/NoFound";


function App() {
  return (
    <div className="app">
      <MenuNav />
      <Routes>
        <Route 
        path="/"
         element={<Home />}
          />
        <Route
         path="/pokemons"
          element={<Pokemons />}
           />
        <Route
         path="/pokemons/:name"
          element={<Detalles />}
           />
        <Route 
        path="*" 
        element={<NotFound />} 
        />

      </Routes>
    </div>
  );
}

export default App;
