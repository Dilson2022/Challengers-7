import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPrincipal";
import administracion from "./components/administracion/administracion";
import InformacionGeneral from "./components/InformacionGeneral/InformacionGeneral";
import usuarios from "./components/usuarios/usuarios";
import Portafolio from "./components/portafolio/portafolio";
import { ProtectedRoute } from "./components/protectedRoute/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<ProtectedRoute isAllowed={true}/>}>
      <Route path="/portafolio" element = {<Portafolio/>}></Route>
      </Route>

      <Route path="/PaginaPrincipal" element = {<PaginaPrincipal/>}></Route>
      <Route path="/administracion" element = {<administracion/>}></Route>
      <Route path="/InformacionGeneral" element = {<InformacionGeneral/>}></Route>
      <Route path="/usuarios" element = {<usuarios/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
