import { useState } from "react";

function FormValidateion(ValidateInfo) {
  const [values, setValues] = useState({
    email: "",
    username: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ValidateInfo(values));
  };
  return { handleChange, values, handleSubmit, errors };
}

export default FormValidateion;
