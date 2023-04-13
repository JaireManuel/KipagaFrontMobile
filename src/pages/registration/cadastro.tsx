import React, { useState } from 'react';
import { IonButton, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonNavLink, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { cashOutline, cash, star, send, sendOutline, arrowUp, arrowDown, arrowDownCircle, qrCode, card, returnUpBack, playOutline, personAdd, logIn } from 'ionicons/icons';
import Logo from '../../imgs/logo.png'


const Cadastro: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword ]= useState('');


    return (
        <>
            {/* baner imagem no visor */}
            <IonImg src={Logo} style={{ width: '50%', margin: '20%' }}></IonImg>
            <IonCard>
                <IonCardHeader>    
                <input 
                                  className='form-control'

                 type="text"
                   placeholder="user@mail.com" 
                 name="username" 
                  onChange={(e) => setUsername(e.target.value)}
                 required
                 /> 
                 <input 
                                  className='form-control'

                 type="text"
                   placeholder="user@mail.com" 
                 name="username" 
                  onChange={(e) => setUsername(e.target.value)}
                 required
                 /> 
                 <input 
                                  className='form-control'

                 type="text"
                   placeholder="user@mail.com" 
                 name="username" 
                  onChange={(e) => setUsername(e.target.value)}
                 required
                 /> 
                 <input 
                                  className='form-control'

                 type="text"
                   placeholder="user@mail.com" 
                 name="username" 
                  onChange={(e) => setUsername(e.target.value)}
                 required
                 /> 
                 <input 
                                  className='form-control'

                 type="text"
                   placeholder="user@mail.com" 
                 name="username" 
                  onChange={(e) => setUsername(e.target.value)}
                 required
                 /> 
               
             
                    <IonButton href='/inicio' expand="block">Entrar</IonButton>
                    <IonButton style={{ margin: '2%', marginLeft: '80%' }} color='dark' href='/'><IonIcon icon={logIn}></IonIcon></IonButton>
                </IonCardHeader>

            </IonCard>
        </>

    );
};

export default Cadastro;
