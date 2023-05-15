import api from "./api";

const getDepositos = async (codigo) => {
    return await api.get("notificacoes?usuario="+codigo);
}
const getToken = async (data) => {
    return await api.post("Token",data);
}
export default {getDepositos,getToken}