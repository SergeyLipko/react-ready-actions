import * as axios from 'axios';
import * as config from '../config';

const CONFIG = {
  baseURL: config.BASE_URL,
};

const createHTTP = () => axios.create(CONFIG);
const http = createHTTP();

const GET = url => http.get(url);
const POST = (url, data={}) => http.post(url, data);
const PATCH = (url, data) => http.patch(url, data);
const DELETE = url => http.delete(url);

export const loadSomeData = url => GET(`/${url}`).then(res => res.data);