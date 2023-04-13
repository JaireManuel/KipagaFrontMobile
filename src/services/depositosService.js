import api from "./api";

const getDepositos = async (codigo) => {
    return await api.get("notificacoes?usuario="+codigo);
}
const getToken = (data) => {
    return api.post("Token",data);
}
export default {getDepositos,getToken}