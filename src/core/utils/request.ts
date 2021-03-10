import axios, { Method } from 'axios';
import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET } from './auth';

type RequestParams = {
   method?: Method;
   url: string;
   data?: object | string;
   params?: object;
   headers?: object;
}

const BASE_URL = 'https://vm-movieflix.herokuapp.com';

export const makeRequest = ({method, url, data, params, headers}:RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    });
}

type LoginData = {
    username: string;
    password: string;
}

export const makeLogin = (loginData : LoginData) =>{
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    console.log(headers);
    const payload = qs.stringify({...loginData, grant_type: 'password'});
    makeRequest({url: '/auth/token', data: payload, headers});
}