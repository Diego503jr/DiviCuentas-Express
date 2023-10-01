import { useContext } from "react";
import { AuthCustomer } from "../context/AuthCustomerProvider";

/* 
Este hook tiene la funcion de recibir todas las propiedades del AuthDoctor
*/
export function useAuth() {
  const auth = useContext(AuthCustomer);
  return auth;
}
