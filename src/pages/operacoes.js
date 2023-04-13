import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonFooter, IonHeader, IonLabel, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { cashOutline } from 'ionicons/icons';
import Nav from '../components/nav';
import depositosService from '../services/depositosService';

const Operacoes = () => {




const [ VerDepositos, SetVerDepositos] =  useState([]);
    useEffect(() => {
      AllDepsitos()
    }, [])  
    const id_user = localStorage.getItem('id')

const AllDepsitos = async () => {
  depositosService.getDepositos(id_user)
  .then((response) => {
  
    // console.log(response.data.Depositos)
    SetVerDepositos(response.data.notifys)
  })
  .catch((error) => {
  
    
    // console.log(error)
    // console.log("errado")
  })
  setTimeout(AllDepsitos,1000)

}



  return (
  <>    
<Nav/>
<IonContent fullscreen={false}>

      {
          VerDepositos.map((deposito) => (
      <IonCard color='light' key={deposito.id}>
        <IonCardHeader>
          <IonLabel>Recebido</IonLabel>
          <IonCardTitle> <IonIcon icon={cashOutline} /> {deposito.conteudo}</IonCardTitle>
          <IonLabel>{deposito.timestamp}</IonLabel>
      </IonCardHeader>
      </IonCard>
         ))
        }
     

    
      </IonContent>
      <IonFooter>
          <IonToolbar>
            <IonTitle>KIPAGA</IonTitle>
          </IonToolbar>
        </IonFooter>
    {/* <IonButton expand="block" onClick={() => presentToast('top')}>Fazer Transferência</IonButton> */}
  </>

  );
};

export default Operacoes;