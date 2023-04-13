import React, { useState, useRef, useEffect} from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardSubtitle,
  IonImg,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import Nav from '../components/nav';
import { cashOutline, logOut } from 'ionicons/icons';
import Pague from '../imgs/img.svg'
import userService from '../services/userService';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

function Perfil() {
  // const modal = useRef<HTMLIonModalElement>(null);
  // const input = useRef<HTMLIonInputElement>(null);

  // const [message, setMessage] = useState(
  //   'This modal example uses triggers to automatically open a modal when the button is clicked.'
  // );

  // function confirm() {
  //   modal.current?.dismiss(input.current?.value, 'confirm');
  // }

  // function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
  //   if (ev.detail.role === 'confirm') {
  //     setMessage(`Hello, ${ev.detail.data}!`);
  //   }
  // }
  const history = useHistory();


  const handlLogout = ()=>{
    localStorage.clear()

    history.replace('/');
  }

  const id_user = localStorage.getItem('id')
console.log(id_user)
const [ VerUser, SetVerUser] =  useState({});
    useEffect(() => {
      UserByID()
    }, [])  
const UserByID = async () => {
await  userService.getUserByID(id_user)
  .then((response) => {
  
    console.log(response.data.User)
    SetVerUser(response.data.User)
  })
  .catch((error) => {
  
    
    console.log(error)
    // console.log("errado")
  })

  // setTimeout(AllDepsitos,1000)

}  
  return (
    <>
    <Nav/>
    <IonContent fullscreen={true}>
    <IonCard color='primary'>
 <br/>
 <IonTitle>Dados do Usuario</IonTitle>

     <IonCard color='light'>
         <IonCardHeader>
         <IonCardSubtitle>Nome Completo : {VerUser.first_name} {VerUser.last_name}</IonCardSubtitle>
         </IonCardHeader>
     </IonCard>

     <IonCard color='light'>
         <IonCardHeader>
         <IonCardSubtitle>Data de Nascimento : {VerUser.data_nasc}</IonCardSubtitle>
         </IonCardHeader>
     </IonCard>

     <IonCard color='light'>
         <IonCardHeader>
         <IonCardSubtitle>Numero de Telefone : {VerUser.Telefone}</IonCardSubtitle>
         </IonCardHeader>
     </IonCard>

     <IonCard color='light'>
         <IonCardHeader>
         <IonCardSubtitle>Email :{VerUser.email}</IonCardSubtitle>
         </IonCardHeader>
     </IonCard>

 <IonTitle>Dados da Conta</IonTitle>
     <IonCard color='light'>
         <IonCardHeader>
         <IonCardSubtitle>ID da conta : {VerUser.first_name}</IonCardSubtitle>
         </IonCardHeader>
     </IonCard>
     <IonCard color='light'>
       <IonCardHeader>
       <IonCardSubtitle>Card Kipaga : {VerUser.idKipaga}</IonCardSubtitle>
       </IonCardHeader>
     </IonCard>
     </IonCard>

 <IonButton expand="block" onClick={handlLogout} >Sair <IonIcon icon={logOut}></IonIcon></IonButton>

    </IonContent>
    </>
  );
}

export default Perfil;