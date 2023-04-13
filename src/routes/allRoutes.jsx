import { useAuth } from "../context/auth";
 import AuthRoutes from "./authRoutes";
import AppRoutes from "./appRoutes";

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div></div>;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;