import api from "./api";

const createTransferencia = (data) => {
    return api.post("Transferencias",data);
}
const userByIdKipaga = (idKipaga) => {
    return api.get("usersByKI/"+idKipaga);
}

export default {createTransferencia,userByIdKipaga} 