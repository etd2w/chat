import { useState } from "react";

const useForm = initialState => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = values => {
    let errors = [];

    for (let [key, value] of Object.entries(values)) {
      if (key === "email" && !value) {
        errors.email = "Please enter an email address.";
      } else if (
        key === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        errors.email = "Please enter a valid email address.";
      }

      if (key === "username" && !value) {
        errors.username = "Please enter a username.";
      } else if (key === "username" && value.length < 4) {
        errors.username = "Username must be at least 4 characters.";
      }

      if (key === "password" && !value) {
        errors.password = "Please enter a password.";
      } else if (key === "password" && value.length < 6) {
        errors.password = "Password must be at least 6 characters.";
      }
    }

    return errors;
  };

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // const handleBlur = () => {
  //   const errors = validateForm(values);
  //   setErrors({ ...errors });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validateForm(values);
    setErrors({ ...errors });
  };

  return [values, errors, handleChange, handleSubmit];
};

export default useForm;
