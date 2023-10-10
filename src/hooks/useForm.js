import { useState } from "react";
import { isValidObjKey, isValidObjValue } from "../utils/validate";
import { useNavigate } from "react-router-dom";
// import { comida } from "../utils/database";

export default function useForm(initialForm, validationForm) {
  let clientes = [];
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
        navigate("./menu");
        let cliente1 = {
          nombre: name1,
          nombreComida: [],
          precioComida: [],
        };
        let cliente2 = {
          nombre: name2,
          nombreComida: [],
          precioComida: [],
        };
        clientes.push(cliente1);
        clientes.push(cliente2);
        const clientesJSON = JSON.stringify(clientes);
        localStorage.setItem("clientes", clientesJSON);
        setLoading(false);
      }, 1000);
    }
  };

  const handleConfirm = async () => {
    if (isValidObjKey(errors) && isValidObjValue(form)) {
      navigate("/bills");
    }
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
    cliente1,
    cliente2,
  };
}
