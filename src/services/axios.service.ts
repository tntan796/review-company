import axios from 'axios';
import CONSTANTS from '../common/constants';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosInstance = axios.create({
    baseURL: CONSTANTS.BASE_API,
    // paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(async (config) => {
    // const token = sessionStorage.getItem(CONSTANTS.TOKEN);
    // if (token) {
    //     config.headers = {
    //         Authorization: `Bearer ${token}`
    //     };
    // }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // eslint-disable-next-line no-console
        console.log('error', error);
        if (error.response && error.response.status === 401) {
            // actionRefreshToken();
            // Xử lí refreshtoken tại đây nếu bị lỗi 401
        }
    },
);

export default axiosInstance;