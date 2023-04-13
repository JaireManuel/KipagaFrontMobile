import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Form = ({
  children,
  pageIn,
  pageOut,
  doSubmit,
setErrors,
  data,
  to,
  schema,
}) => {
  const { t } = useTranslation();
  function validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;
    const infoError = {};
    for (let item of error.details) infoError[item.path[0]] = item.message;

    return infoError;
  }

  async function handleSignIn(event) {
    event.preventDefault();
    const infoError = validate();
    setErrors(infoError || {});
    if (infoError) return console.log(infoError);

    doSubmit();
  }
  return (
    <div className="data-form">
      <h3>Seja Bem vindo!</h3>
      <p>Preencha os seus dados de Usuário</p>
      <form onSubmit={handleSignIn} className="inputs">
        <section style={{ paddingTop: 0 }}>{children}</section>
        <button type="submit" className="btn-entrar" >Entrar</button>
      </form>
    </div>

  );
};

export default Form;
