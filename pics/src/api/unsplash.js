import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9bf66cc818fef4928ebc58a6aeb55297c6f705ee9b8882951bb786965691d928',
  }
});
