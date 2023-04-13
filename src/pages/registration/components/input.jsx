import React from "react";
import Joi from "joi-browser";

const Input = ({
  name,
  placeholder,
  autofocus,
  errors,
  schema,
  data,
  setData,
  setErrors,
  ...rest
}) => {
  function validateProperty({ name, value }) {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  }
  function handleInputChange({ currentTarget: input }) {
    const err = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) err[input.name] = errorMessage;
    else delete err[input.name];
    const { name, value } = input;
     setData({ ...data,[name]: value });
    setErrors(err);
  }
  return (
    <>
      <div className="mail">
        <input
          {...rest}
          onChange={handleInputChange}
          name={name}
          placeholder={placeholder}
           />
           <br />
        {errors[name] && <p id="error">{errors[name]}</p>}
      </div>
    </>
  );
};

export default Input;
