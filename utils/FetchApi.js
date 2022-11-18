import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '2d0db4ed0bmshbde0b1a06c7a22fp1fd2f0jsne1fd7dc54497',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    });
    
  return data;
}