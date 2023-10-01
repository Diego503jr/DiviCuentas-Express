import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthCustomer = createContext();

export function AuthCustomerProvider({ children }) {
  const navigate = useNavigate();
  const [customer1, setCustomer1] = useState(null);
  const [customer2, setCustomer2] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   *  SignIn & SignUp
   *
   * credentials - Credenciales del doctor para iniciar sesión.
   * credentials.email - Correo electrónico del doctor.
   * credentials.password - Contraseña del doctor.
   *
   */

  const getData = async ({ name1, name2 }) => {
    try {
      setLoading(true);
      const pe1 = await name1;
      const pe2 = await name2;

      setCustomer1(pe1);
      setCustomer2(pe2);

      localStorage.setItem("customer1", JSON.stringify(pe1));
      localStorage.setItem("customer2", JSON.stringify(pe2));

      navigate("/menu");
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const isLoggedIns = () => {
    try {
      let customer1 = localStorage.getItem("customer1");
      let customer2 = localStorage.getItem("customer2");
      customer1 = JSON.parse(customer1);
      customer2 = JSON.parse(customer2);

      if (customer1 && customer2) {
        setCustomer1(customer1);
        setCustomer2(customer2);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isLoggedIns();
  }, []);

  const auth = { customer1, customer2, loading, getData };
  return <AuthCustomer.Provider value={auth}>{children}</AuthCustomer.Provider>;
}
