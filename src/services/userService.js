import api from "./api";

const getUserByID = (codigo) => {
    return api.get("users/"+codigo);
}

export default {getUserByID}