import axios from "axios";

export const baseUrl = "https://zillow56.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
        'X-RapidAPI-Key': 'bc4ab4be8cmsh0b6311f33591d17p15a9f3jsn69b50c74f532',
        'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
      },
  });

  return data;
};
