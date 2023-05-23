import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonLabel, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
import { returnUpBack } from 'ionicons/icons';
import Nav from '../components/nav';
import Card1 from '../imgs/1.png'
import Card2 from '../imgs/2.png'

const Cartao: React.FC = () => {

  return (
  <>    
<Nav/>
<IonContent fullscreen={false}>
<Link to='/Inicio'>
    <IonButton ><IonIcon icon={returnUpBack}></IonIcon></IonButton>
</Link>
<IonTitle>Cartão Kipaga </IonTitle>
      <IonCard color='light'>
       <IonImg src={Card1} style={{ width:'100%', height:'80%' }}></IonImg>
      </IonCard>    

      <IonCard color='light'>
       <IonImg src={Card2} style={{ width:'100%', height:'80%' }}></IonImg>
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