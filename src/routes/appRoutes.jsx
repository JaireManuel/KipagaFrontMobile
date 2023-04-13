import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonNav,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircle, cardOutline, cashOutline, ellipse, homeOutline, personCircleOutline, square, trailSignOutline, triangle } from 'ionicons/icons';
import Inicio from './pages/inicio';
import './styles/main.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Operacoes from './pages/operacoes';
import Perfil from './pages/perfil';
import Enviar from './pages/enviar';
import Receber from './pages/receber';
import Transferencia from './pages/transferencias';
import Cartao from './pages/cartao';
import Login from './pages/registration/login';
import Cadastro from './pages/registration/cadastro';
import { useAuth } from '../context/auth'
setupIonicReact();

const AppRoutes  = ()  => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div></div>;
  }

  if(signed){
<Redirect to="/home" /> 
  }else{
<Redirect to="/login" />
  } 
 
   return (
  <IonApp>

    
     <IonReactRouter>
<IonTabs>
  <IonRouterOutlet>
    <Route exact path="/operacoes" >
      <Operacoes />
    </Route>
    <Route exact path="/inicio">
      <Inicio />
    </Route>
    <Route exact path="/Pagamentos">
      <Pagamentos />
    </Route>
    <Route exact path="/Perfil">
      <Perfil/>
    </Route>
    <Route exact path="/enviar">
      <Enviar/>
    </Route>
    <Route exact path="/receber">
      <Receber/>
    </Route>

    <Route exact path="/cartao">
      <Cartao/>
    </Route>

    <Route exact path="/tranferir">
      <Transferencia />
    </Route>
  </IonRouterOutlet>
  <IonTabBar slot="bottom">
    <IonTabButton tab="operacoes" href="/operacoes">
      <IonIcon icon={trailSignOutline} />
      <IonLabel>Operações</IonLabel>
    </IonTabButton>

    <IonTabButton tab="Inicio" href="/inicio">
      <IonIcon icon={homeOutline} />
      <IonLabel>Inicio </IonLabel>
    </IonTabButton>

    <IonTabButton tab="Perfil" href="/Perfil">
      <IonIcon icon={personCircleOutline} />
      <IonLabel>Perfil</IonLabel>
    </IonTabButton>
     
  </IonTabBar>
</IonTabs>
</IonReactRouter>
  </IonApp>
);
};  
export default AppRoutes;
