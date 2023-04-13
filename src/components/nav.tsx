import { Redirect, Route } from 'react-router-dom';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import Logo from '../imgs/logo.png' 
/* Theme variables */

setupIonicReact();

const Nav = () => (
  <>
  <IonHeader className='toolbar' >
    <div className="logo"></div>
    <div className="notify"></div>
            <IonImg src={Logo} style={{ width:'35%', margin:'2px'}}></IonImg>
          
  </IonHeader>
  </>
);

export default Nav;
