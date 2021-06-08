import axios from 'axios';
import config from '../../config';

const instance = axios.create({
  baseURL: `http://${config.API_URL}:8080/api`,
});

export default instance;
