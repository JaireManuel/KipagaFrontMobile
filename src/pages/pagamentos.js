import React, { useState,useEffect } from 'react';
import { IonButton, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { cashOutline, cash, star, send, sendOutline, arrowUp, arrowDown, arrowDownCircle, qrCode, card, returnUpBack } from 'ionicons/icons';
import Nav from '../components/nav';
import Transferer from '../imgs/tranfer.png' 
import userService from '../services/userService';
import transferenciaService from '../services/transferenciaService';
import swal from 'sweetalert';
import {QRScanner} from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


const Pagamentos = () => {

  return (
    <>
      <IonCardHeader>
              <IonCardTitle> mais próximos de sí</IonCardTitle>
              <IonCardSubtitle>Seja rápido, e econtre os  mais próximos de sí aqui.</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonThumbnail slot="start">
                  </IonThumbnail>
                  <IonLabel>Hospital Central</IonLabel>
                  <IonButton color='primary' fill="clear">Ver</IonButton>

                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                  </IonThumbnail>
                  <IonLabel>Hospital Central</IonLabel>
                  <IonButton color='primary' fill="clear">Ver</IonButton>

                </IonItem>

                <IonItem>
                  <IonThumbnail slot="start">
                  </IonThumbnail>
                  <IonLabel>Hospital Central</IonLabel>
                  <IonButton color='primary' fill="clear">Ver</IonButton>

                </IonItem>

                <IonItem lines="none">
                  <IonThumbnail slot="start">
                  </IonThumbnail>
                  <IonLabel>Hospital Central</IonLabel>
                  <IonButton color='primary' fill="clear">Ver</IonButton>

                </IonItem>
              </IonList>
            </IonCardContent>
       </>

  );
};

export default Pagamentos;
