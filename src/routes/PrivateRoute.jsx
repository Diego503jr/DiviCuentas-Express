import { Navigate, Outlet } from "react-router-dom";

/**
 * Componente de rutas públicas.
 * children - Componentes hijos.
 */

export const PrivateRoute = ({ children }) => {
  if (localStorage.getItem("cliente1") && localStorage.getItem("cliente2")) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
