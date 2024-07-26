import api from "./api";

function submitSigning(type, data) {
    api(type === 'login' ? 'login' : 'signup', 'POST', data)
}

export default submitSigning;