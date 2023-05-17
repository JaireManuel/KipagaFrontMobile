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
  IonCardContent,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import Nav from '../components/nav';
import { cashOutline, logOut } from 'ionicons/icons';
import Pague from '../imgs/img.svg'
import userService from '../services/userService';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
import { person } from 'ionicons/icons';
import "../styles/main.css"

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
  const history = useHistory()

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
const imageUrl = "192.168.100.5:8000"+VerUser.foto;

  return (
    <>
    <Nav/>
    <IonContent fullscreen={true}>
    <IonCard color='primary'>
 <br/>
 <IonCard><div className='imgPerfil' style={{backgroundImage: `url("http://192.168.100.5:8000${VerUser.foto}")`}}>
 </div>

  </IonCard>

 <IonCard>
      <IonCardHeader>
        <IonCardTitle>Perfil Kipaga</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonIcon icon={person} size="large" />
        <h2> {VerUser.first_name} {VerUser.last_name}</h2>
        <p>{VerUser.email}</p>
        <p>Telefone  {VerUser.Telefone}</p>
      </IonCardContent>
  </IonCard>
     <IonCard color='light'>
         <IonCardHeader style={{ textAlign:"center"}}>
         <IonCardTitle>{VerUser.idKipaga}</IonCardTitle>
         </IonCardHeader>
     </IonCard>
     </IonCard>

 <IonButton expand="block" onClick={handlLogout} >Sair <IonIcon icon={logOut}></IonIcon></IonButton>

    </IonContent>
    </>
  );
}

export default Perfil;