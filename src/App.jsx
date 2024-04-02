import { Routes, Route } from "react-router-dom";
import Navigation from "./Componentes/Navigation";
import Home from './Views/Home';
import Pizza from "./Views/Pizza";
import NotFound from "./Views/NotFound";
import Carrito from "./Views/Carrito";

const App = () => {


  return (
    <div>
      <Navigation />

      <Routes>
        <Route
          path='/'
          element={<Home />}>
        </Route>
        <Route
          path='/pizza/:name'
          element={<Pizza />}>
        </Route>
        <Route
          path='/carrito'
          element={<Carrito />}>
        </Route>
        <Route
          path='*'
          element={<NotFound />}>
        </Route>
      </Routes>

    </div>
  );
};
export default App;
