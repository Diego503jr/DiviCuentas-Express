import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isValidObjKey, isValidObjValue } from "../utils/validate";

export default function useForm(initialForm, validationForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);

  // useEffect(() => {
  //   const savedForm = JSON.parse(localStorage.getItem("savedForm"));
  //   if (savedForm) {
  //     setForm(savedForm);
  //   }
  // }, []);

  const { name1, name2 } = form;

  useEffect(() => {
    localStorage.setItem("first", JSON.stringify(name1));
    localStorage.setItem("second", JSON.stringify(name2));
  }, [name1, name2]);

  const navigate = useNavigate();

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
    setErrors(validationForm(form));

    if (isValidObjKey(errors) && isValidObjValue(form)) {
      setLoading(true);
      setTimeout(() => {
        navigate("/menu");
        setLoading(false);
      }, 1000);
    }
  };

  return {
    form,
    close,
    errors,
    loading,
    handleOnChange,
    handleOnBlur,
    handleGetData,
  };
}
