import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../../imgs/logo.png'
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './style/login.css'
import Input from "./components/input";
import useAuth from '../../context/auth';
import { useState, useEffect } from 'react';
import { schema } from './components/shema';
import Form from './components/form';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useContext } from "react";

import api from '../../services/api';
import getDeposito from '../../services/depositosService';
const Login = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    username: "",
    password: ""

  });
const [ usuario, setUser] =  useState({});
const [ loading, setloading] =  useState({});
  const [errors, setErrors] = useState({});
  const [error, setError] = useState({});
  const history = useHistory();

  async function doSubmit() {
    try {
   await   api
      .post('Token', data)
      .then((response) => {
        setloading(false);
        const token = response.data.access;
        //  console.log(decode1);
console.log(data)

        // console.log(response.data);  
        const user = jwt_decode(token);
        setUser(user);
        setError('');
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("id", user.user_id)
        Cookies.set(token);
        history.replace('/inicio');
        swal({
          title: "Seja bem Vindo!",
          text: "Login Bem sucedido!",
          icon: "success",
          button: false,

          timer: 1500
        });
      })
      .catch((error) =>{
         swal({
          title: "Erro!",
          text: "Houve um problema com o login, verifique suas credenciais.",
          icon: "error",
          button: true,


        })
        console.log(data)

      }
       
      );
    } catch (error) {
      console.log(data)
      console.log(error.message);
    }
  }

  return (
    <IonPage>

      <IonContent fullscreen>

        <div className="center-login"></div>
      
        <div className="form-control">
        <div className="center">
          <img src={logo} alt="imagem" id="imglogin" />
        </div>
          <Form
            doSubmit={doSubmit}
            pageIn={t("entrar")}
            pageOut={t("criarConta")}
            to="/signup"
            schema={schema}
            setErrors={setErrors}
            data={data}
          >
            <Input
               name="username"
              placeholder={t("email")}
              errors={errors}
              data={data}
              schema={schema}
              setData={setData}
              setErrors={setErrors}
            />
            <br />

            <Input
              type="password"
              name="password"
              placeholder={t("Digite a Sua senha")}
              errors={errors}
              data={data}
              schema={schema}
              setData={setData}
              setErrors={setErrors}
            />
   
          </Form>

          <Link className="esqueceu" to="/">
            {t("Criar conta?")}
          </Link>

          <Link className="esqueceu" to="/">
            {t("Esqueceu sua Senha?")}
          </Link>

        </div>








      </IonContent>
    </IonPage>
  );
};

export default Login;
