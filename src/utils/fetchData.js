export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
      'X-RapidAPI-Key': '0840fc6a95mshb9547152d6436cep1595d1jsn0064aba5e1de',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
};