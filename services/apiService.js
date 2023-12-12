import axios from "axios";

const apiService = axios.create({
    baseURL:
      process.env.NEXT_BASE_URL || 'https://peter-sheba.vercel.app/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });


  export default apiService;