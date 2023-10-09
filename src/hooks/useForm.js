import { useState } from "react";
import { isValidObjKey, isValidObjValue } from "../utils/validate";
import { useNavigate } from "react-router-dom";

export default function useForm(initialForm, validationForm) {
  let clientes = [];
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const {
      target: { name, value, checked },
    } = e;

    switch (name) {
      case "customerFood1":
        setForm((prevForm) => ({
          ...prevForm,
          [name]: checked,
        }));
        break;
      case "customerFood2":
        setForm((prevForm) => ({
          ...prevForm,
          [name]: checked,
        }));
        break;
      default:
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
        break;
    }
  };

  const handleOnBlur = (e) => {
    handleOnChange(e);
    setErrors(validationForm(form));
  };

  const handleGetData = (e) => {
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

  const handleConfirm = () => {
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
  };
}
