import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonLabel, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { returnUpBack } from 'ionicons/icons';
import Nav from '../components/nav';
import Card from '../imgs/cardf.jpeg'

const Cartao: React.FC = () => {

  return (
  <>    
<Nav/>
<IonContent fullscreen={false}>
<IonButton href='/Inicio'><IonIcon icon={returnUpBack}></IonIcon></IonButton>
<IonTitle>Cartão Kipaga </IonTitle>
      <IonCard color='light'>
        <IonCardHeader>
            <IonCardSubtitle>Frente</IonCardSubtitle>
        </IonCardHeader>
       <IonImg src={Card} style={{ width:'100%', height:'80%' }}></IonImg>
      </IonCard>    

      <IonCard color='light'>
      <IonCardHeader>
            <IonCardSubtitle>Trás</IonCardSubtitle>
        </IonCardHeader>
       <IonImg src={Card} style={{ width:'100%', height:'80%' }}></IonImg>
      </IonCard> 
      <IonCard color='light'>
        <IonCardHeader>
          <IonLabel></IonLabel>
          <IonCardTitle><br/></IonCardTitle>
          <IonLabel><br/></IonLabel>
      </IonCardHeader>
      </IonCard>
      </IonContent>
    {/* <IonButton expand="block" onClick={() => presentToast('top')}>Fazer Transferência</IonButton> */}
  </>

  );
};

export default Cartao;