import axios from 'axios';
import store from '../store';

const axiosIntance = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

axiosIntance.interceptors.request.use((req) => {
    // const { auth } = store.getState();
    // if(auth.token){
    //     req.headers.Authorization = `Bearer ${auth.token}`;
    // }
    return req;
})

axiosIntance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    const status = error.response ? error.response.status : 500;
    if(status && status === 500){
        // localStorage.clear();
        // store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
})

export default axiosIntance;