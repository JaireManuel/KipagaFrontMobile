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

const AuthRoutes  = ()  => {

  const [VerTab,setVerTab] = useState(false);
  return (
  <IonApp>
    <IonReactRouter>
    <Route exact  path="/" >
        <Login/>
    </Route>

    <Route exact  path="/Cadastro">
        <Cadastro/>
    </Route>
    </IonReactRouter>
  </IonApp>
);
};  
export default AuthRoutes;