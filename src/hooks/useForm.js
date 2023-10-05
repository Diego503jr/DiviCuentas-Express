import { useState } from "react";
import { isValidObjKey, isValidObjValue } from "../utils/validate";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export default function useForm(initialForm, validationForm) {
  const auth = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
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
        auth.getData({ name1, name2 });
        setLoading(false);
      }, 1000);
    }
  };

  const handleOrderFood = (e) => {
    e.preventDefault();
    const { customerOrder1, customerOrder2 } = form;

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
    handleOrderFood,
  };
}
