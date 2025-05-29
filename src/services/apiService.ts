import axios from 'axios';

const baseURL = 'https://newsapi.org/v2';
const apiKey = '6a7c9b908250426f94a9224edde63fdc';

export const GetApiService = (url: string) => {
  const myUrl = `${baseURL}${url}&apiKey=${apiKey}`;

  return axios.get(myUrl);
};
