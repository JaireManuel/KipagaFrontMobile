import React, { useEffect, useState } from 'react';
import { IonButton,  IonContent, IonImg,  IonTitle,  useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { returnUpBack } from 'ionicons/icons';
import Nav from '../components/nav';
import userService from '../services/userService';
import { Link } from 'react-router-dom';

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
<Link to='/Inicio'>
<IonButton><IonIcon icon={returnUpBack}></IonIcon></IonButton>
</Link>
<IonTitle>Receber </IonTitle>
      <IonCard color='primary'>
        <IonCardHeader>
           <IonTitle>Ler o QR Code</IonTitle>
       </IonCardHeader>
       <IonImg src={`https://ganilson.pythonanywhere.com/static/images/${VerUser.bi}.png`} style={{ width:'100%', height:'80%' }}></IonImg>
      </IonCard>    
      <IonCard color='primary'>
     

         <IonCardHeader style={{ textAlign:"center"}}>
         <IonCardTitle>{VerUser.idKipaga}</IonCardTitle>
         </IonCardHeader>

      </IonCard> 
      
      </IonContent>
 
    {/* <IonButton expand="block" onClick={() => presentToast('top')}>Fazer Transferência</IonButton> */}
  </>

  );
};

export default Receber;