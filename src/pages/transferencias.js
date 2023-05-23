import React, { useState,useEffect } from 'react';
import { IonButton, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { cashOutline, cash, star, send, sendOutline, arrowUp, arrowDown, arrowDownCircle, qrCode, card, returnUpBack } from 'ionicons/icons';
import Nav from '../components/nav';
import Transferer from '../imgs/tranfer.png' 
import userService from '../services/userService';
import transferenciaService from '../services/transferenciaService';
import swal from 'sweetalert';
// import {QRScanner} from '@ionic-native/qr-scanner';
import { Link, Redirect } from 'react-router-dom';

const numeral = require('numeral');
const Transferencia = () => {

const id_user = localStorage.getItem('id')
const [ VerUser, SetVerUser] =  useState({});

const [sender, setSender] = useState({});
const [enviar, setenviar] = useState(false);
const [Receiver, setReceiver] = useState({});
const [ReceiverID, setReceiverID] = useState({});
const [Valor, setValor] = useState({});
const [iserror, setiserror] = useState("")



const price = VerUser.saldo; // Preço

// Formata o preço
const formattedPrice = numeral(price).format('0,0.00');


useEffect(() => {
  UserByID()
  setSender(id_user)
  // checkPermission()
}, [])  
//    const checkPermission = async () => {
//  try {
//      // check or request permission
//      const status = await BarcodeScanner.checkPermission({ force: true });
  
//      if (status.granted) {
//        // the user granted permission
//        return true;
//      }
//  }catch(error){
//   setiserror(error.message)
//   console.log(iserror)
//  }
  
//     return false;
//   };
 

const realizarTransferencias = async (e) => {
  e.preventDefault();
  await transferenciaService.userByIdKipaga(ReceiverID)
   .then((response) => {
    setenviar(true)
    // console.log(response.data.User)
    setReceiver(response.data.User)
 
  }).catch((error) => {

    console.log(error);
   swal({
     title: "Erro!",
     text: "Verifique os dados!",
     icon: "error",
     button: false,

     timer: 1500

   });

   
      });

  const formData = new FormData();
  formData.append("receptor", Receiver.id);
  formData.append("sender", sender);
  formData.append("valor", Valor);
// console.log(Receiver)
  await transferenciaService.createTransferencia(formData)
  .then((response) => {
    console.log(response.data)
    if (response.data.status === "saldo") {
      swal({
        title: "Saldo Insuficiente",
        text: "O Seu saldo e insuficiente para completar",
        icon: "warning",
        button: false,

        timer: 1500
      });
  
    }
      if (response.data.status === "dados") {
      swal({
        title: "Id Kipaha",
        text: "O ID Kipaga digitado é mesmo que o seu!",
        icon: "warning",
        button: false,
  
        timer: 1500
      });
  
    } // console.log(response.data.Transferencia)
    swal({
      title: response.data.Transferencia.valor,
      text: "Transferencia bem sucedida para "+Receiver.first_name+" "+ Receiver.last_name,
      icon: "success",
      button: false,

      timer: 500
    });

 
  })
  .catch((error) => {

     console.log(error);
    swal({
      title: "ID Kipaga!",
      text: "Este ID Kipaga não foi encontrado!",
      icon: "warning",
      button: false,

      timer: 2500

    });

    
       });

 
}   
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

if (enviar) {
  return <Redirect to="/inicio" />;
}

  return (
    <>
   <Nav/>
<IonContent fullscreen={true}>
  {/* baner imagem no visor */}
  <IonHeader>
  <Link to="enviar">
<IonButton style={{position:'fixed'}} ><IonIcon icon={returnUpBack}></IonIcon></IonButton>

</Link> 
 <IonImg src={Transferer} style={{ width:'100%', height:'70%' }}></IonImg>     </IonHeader>

<form 

onSubmit={(e) => realizarTransferencias(e)}
>
<IonCard color='primary'>
        <IonCardHeader>
          <IonLabel>Saldo Disponivel</IonLabel> 
          <IonCardTitle>  {formattedPrice} AO</IonCardTitle>
      </IonCardHeader>
      </IonCard>
        <IonCard>
        {/* <IonLabel style={{ margin:'15px' }}>Insere o valor a ser tranferido</IonLabel> */}
            <IonCardHeader>     
                <IonItem>
                    <IonLabel position="stacked">Digite o valor </IonLabel>
                    
                     <input 
                 type="number"
                   placeholder="00 000 000" 
                 name="username" 
                 onChange={(e) => setValor(e.target.value)}
                 required
                 />
                </IonItem>
            </IonCardHeader>
            {/* <IonButton expand="block">Seguinte</IonButton> */}
        </IonCard>


     <IonCard>
        <IonLabel style={{ margin:'15px' }}>ID / QR Code</IonLabel>
            <IonCardHeader>     
                <IonItem>
                <IonButton   style={{ width:'80px', height:'70px', marginLeft:'35%' }}>
                     <IonIcon slot="icon-only" icon={qrCode}></IonIcon>
                </IonButton>
                    <IonLabel position="stacked">Inserir ID </IonLabel>
                    <input 
                 type="text"
                   placeholder="Ki012131" 
                 name="username" 
                 onChange={(e) => setReceiverID(e.target.value)}
                 required
                 />
                </IonItem>
            </IonCardHeader>
        </IonCard>
        {enviar ?  <IonButton type="submit" expand="block">Transação concluida!</IonButton>
 :         <IonButton type="submit" expand="block">Efetuar transfêrencias</IonButton>}
        <IonCard color='light'>
        <IonCardHeader>
          <IonLabel></IonLabel>
          <IonCardTitle><br/></IonCardTitle>
          <IonLabel><br/></IonLabel>
      </IonCardHeader>
    </IonCard>
</form>
      </IonContent>
      </>

  );
};

export default Transferencia;
