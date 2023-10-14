import { useState } from "react";
import { isValidObjKey, isValidObjValue } from "../utils/validate";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm, validationForm) => {
  let clientes1;
  let clientes2;

  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [cliente1, setCliente1] = useState({
    comida: [],
  });
  const [cliente2, setCliente2] = useState({
    comida: [],
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorName, setErrorName] = useState(null);

  const handleOnChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCheckbox1Change = (comidaSeleccionada, isChecked) => {
    if (isChecked) {
      setCliente1((prevCliente) => ({
        ...prevCliente,
        comida: [...prevCliente.comida, comidaSeleccionada],
      }));
    } else {
      setCliente1((prevCliente) => ({
        ...prevCliente,
        comida: prevCliente.comida.filter(
          (comida) => comida !== comidaSeleccionada
        ),
      }));
    }
  };

  const handleCheckbox2Change = (comidaSeleccionada, isChecked) => {
    if (isChecked) {
      setCliente2((prevCliente) => ({
        ...prevCliente,
        comida: [...prevCliente.comida, comidaSeleccionada],
      }));
    } else {
      setCliente2((prevCliente) => ({
        ...prevCliente,
        comida: prevCliente.comida.filter(
          (comida) => comida !== comidaSeleccionada
        ),
      }));
    }
  };

  const handleOnBlur = (e) => {
    handleOnChange(e);
    setErrors(validationForm(form));
  };

  const handleGetData = (e) => {
    e.preventDefault();
    const { name1, name2 } = form;
    setErrors(validationForm(form));

    if (isValidObjKey(errors) && isValidObjValue(form)) {
      setLoading(true);
      setTimeout(() => {
        clientes1 = name1;
        clientes2 = name2;
        localStorage.setItem("cliente1", JSON.stringify(clientes1));
        localStorage.setItem("cliente2", JSON.stringify(clientes2));
        navigate("./menu");
        setLoading(false);
      }, 1000);
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (cliente1.comida.length === 0 && cliente2.comida.length === 0) {
      setErrorName("Debe seleccionar la comida para mostrar la cuenta");
    } else {
      if (cliente1.comida.length === 0 || cliente2.comida.length === 0) {
        setErrorName("Ambos clientes deben seleccionar comida");
      } else {
        setLoading(true);
        setTimeout(() => {
          const comidaCliente1 = cliente1.comida;
          const comidaCliente2 = cliente2.comida;

          localStorage.setItem(
            "comidaCliente1",
            JSON.stringify(comidaCliente1)
          );
          localStorage.setItem(
            "comidaCliente2",
            JSON.stringify(comidaCliente2)
          );
          navigate("/bills");
          setLoading(false);
        }, 1000);
      }
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("cliente1");
      localStorage.removeItem("cliente2");
      localStorage.removeItem("comidaCliente1");
      localStorage.removeItem("comidaCliente2");
      navigate("/");
      setLoading(false);
    }, 2000);
  };

  return {
    form,
    errors,
    loading,
    handleOnChange,
    handleOnBlur,
    handleGetData,
    handleConfirm,
    handleCheckbox1Change,
    handleCheckbox2Change,
    handlePayment,
    cliente1,
    cliente2,
    errorName,
  };
};
