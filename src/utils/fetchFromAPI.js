import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; 

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'af778f7287msh9777c5e3e0c5ee2p11fd07jsn16ff1c68de45',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }