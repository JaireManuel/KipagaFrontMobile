import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonLabel, IonRow, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { arrowUp, qrCode, card, wallet } from 'ionicons/icons';
import Nav from '../components/nav';
import { Link } from 'react-router-dom';

import userService from '../services/userService';
import SwiperPagamentos from '../components/SwiperPagamentos';
const numeral = require('numeral');




const Inicio = () => {


  const [ ActividadesRecentes, setActividadesRecentes] = useState([])



  const id_user = localStorage.getItem('id')
// console.log(id_user)
const [ VerUser, SetVerUser] =  useState({});
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
const saldo = (VerUser.saldo);
  const [present] = useIonToast();

  const price = saldo; // Preço

  // Formata o preço
  const formattedPrice = numeral(price).format('0,0.00');
  return (
    <>
   <Nav/>
<IonContent fullscreen={false}>
  {/* baner imagem no visor */}
         {/* <IonCardHeader >
      </IonCardHeader> */}
      <div className="header">

      </div>
 
            <IonCard color='light'>
      <IonCardHeader>
          <IonLabel>Saldo Disponivel</IonLabel>
          <IonCardTitle> <IonIcon icon={wallet} />  {formattedPrice} AOA</IonCardTitle>
      </IonCardHeader>
      </IonCard>

{/* botoes de accao da pagina inicial */}
    <IonGrid >
        <IonRow>
          <IonCol>
          <Link to="/enviar">
<IonButton style={{ width:'80px', height:'70px'}}>
              <IonIcon slot="icon-only" icon={arrowUp}></IonIcon>
         </IonButton>
</Link>
         
          </IonCol>

          <IonCol>
          <Link to="/receber">
          <IonButton   style={{ width:'80px', height:'70px' }}>
            <IonIcon slot="icon-only" icon={qrCode}></IonIcon>
         </IonButton>
</Link>
         
          
      
          </IonCol>
          <IonCol>
          <Link to="/cartao">
          <IonButton style={{ width:'80px', height:'70px' }}>
              <IonIcon slot="icon-only" icon={card}></IonIcon>
          </IonButton>
</Link>
         
          </IonCol>
        </IonRow>
      </IonGrid>

{/* Actividades Recentes */}
<br />

<SwiperPagamentos/>
<br /><br /><br /><br />
<IonCard color='light'>
      <IonCardHeader>
        </IonCardHeader>
      </IonCard>
      </IonContent>
      </>

  );
};

export default Inicio;
