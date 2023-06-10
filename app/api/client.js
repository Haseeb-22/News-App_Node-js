import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.59.160:5000/api',
});
