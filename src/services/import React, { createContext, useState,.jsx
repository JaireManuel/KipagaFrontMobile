import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import swal from 'sweetalert';

import { useHistory } from 'react-router-dom';
import { CapacitorCookies } from '@capacitor/core';
const AuthContext = createContext({
  signed: true,
  user: {id:"", name:"",},
  error:"",
  signIn: Function,
  signOut: Function,
  loading: false,
});

const tokenKey = '@KIPAGA:token';
const userKey = '@KIPAGA:user';

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const storageUser = Cookies.get(userKey);
    const storageToken = Cookies.get(tokenKey);
    setLoading(false);
    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser));
      api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
    }
  }, []);


  // Verifique aqui se o usuário já está autenticado
  // e defina o estado de autenticação e usuário em conformidade
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
  });

  const signIn = async () => {
    api
      .post('Token', data)
      .then((response) => {
        setLoading(false);
        const token = response.data.access;
    //  console.log(decode1);
     setLogin(true);
    
        // console.log(response.data);  
        const user = jwt_decode(token);
        setUser(user);
        setError('');
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        localStorage.setItem("user", JSON.stringify(user))
        Cookies.set(userKey, JSON.stringify(user));
        Cookies.set(tokenKey, token);
        history.replace('/inicio');
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: false,
    
          timer: 1500
        });
      })
      .catch((error) =>
      swal({
        title: "Erro!",
        text: "Houve um problema com o login, verifique suas credenciais.",
        icon: "error",
        button: true,
  
  
      })  
       );
      
  };

  const signOut = async () => {
    // Implemente aqui a lógica de saída de autenticação
    // e defina o estado de autenticação e usuário em conformidade
  };


  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,

        error,
       
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
   return context;
   
}

export default AuthContext;
