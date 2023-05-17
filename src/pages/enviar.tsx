import React, {useRef,  useEffect, useState } from 'react';
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonLabel, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { arrowUp, backspace, card, cash, cashOutline, qrCode, returnDownBack, returnUpBack } from 'ionicons/icons';
import Nav from '../components/nav';
import Pague from '../imgs/pague.png'
import { Link, Route } from 'react-router-dom';

// const [verDepositos, setDepositos] = useState();

// const alldepositos = async() =>{
//   await depositosService.getDepositos().then((Response)=>
// console.log(Response.data)
//   )
// }

// useEffect(() => {
//   alldepositos();
// }, []);

const Enviar: React.FC = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log('Erro ao acessar a câmera:', error);
    }
  };

  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Operação bem sucedida !',
      duration: 1500,
      position: position
    });
  };
  return (
  <>    
<Nav/>
<IonContent fullscreen={false}>
  
<Link to="inicio">
<IonButton style={{position:'fixed'}} ><IonIcon icon={returnUpBack}></IonIcon></IonButton>

</Link>
<IonImg src={Pague} style={{ width:'100%'}}></IonImg>
{/* <button onClick={startCamera}>Abrir Câmera</button>
      <video ref={videoRef} autoPlay></video> */}
<Link to="Pagamentos">
<IonButton expand="block" >
           <IonTitle>Pagamentos</IonTitle>
      </IonButton>
</Link>
    
    
<Link to="tranferir">
<IonButton expand="block" >
           <IonTitle>Tranferencias</IonTitle>
      </IonButton>
</Link>
    
      </IonContent>
  </>

  );
};

export default Enviar;