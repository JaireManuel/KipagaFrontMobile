import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonLabel, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { arrowUp, card, cash, cashOutline, qrCode, returnUpBack } from 'ionicons/icons';
import Nav from '../components/nav';
import Card from '../imgs/cardf.jpeg'
import userService from '../services/userService';

const Receber: React.FC = () => {

  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Operação bem sucedida !',
      duration: 1500,
      position: position
    });
  };
  const id_user = localStorage.getItem('id')
  // console.log(id_user)
  const [ VerUser, SetVerUser] =  useState({bi:"", idKipaga:""});
      useEffect(() => {
        UserByID()
      }, [])  
  const UserByID = async () => {
    userService.getUserByID(id_user)
    .then((response) => {
    
      // console.log(response.data.User)
      SetVerUser(response.data.User)
    })
    .catch((error) => {
    
      
      console.log(error)
      // console.log("errado")
    })
     setTimeout(UserByID,5000)
  
  }
  return (
  <>    
<Nav/>
<IonContent fullscreen={false}>
<IonButton href='/Inicio'><IonIcon icon={returnUpBack}></IonIcon></IonButton>
<IonTitle>Receber </IonTitle>
      <IonCard color='light'>
        <IonCardHeader>
           <IonTitle>Ler o QR Code</IonTitle>
       </IonCardHeader>
       <IonImg src={`http://192.168.100.5:8000/static/images/${VerUser.bi}.png`} style={{ width:'100%', height:'80%' }}></IonImg>
      </IonCard>    
      <IonCard color='light'>
        <IonCardHeader>
           <IonTitle>ID Kipaga : {VerUser.idKipaga}</IonTitle>
       </IonCardHeader>
      </IonCard> 
      </IonContent>
 
    {/* <IonButton expand="block" onClick={() => presentToast('top')}>Fazer Transferência</IonButton> */}
  </>

  );
};

export default Receber;