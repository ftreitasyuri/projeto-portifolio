import apiWeather from './api_weather.js';


const getWeather = async (cidade, key) => {
    try {
        const response = await apiWeather.get(`weather?q=${cidade}&appid=${key}&units=metric`);
        return response.data;
    } catch (error) {
        console.log("Erro ao buscar os dados do clima", error);
        throw error;
    }
}

export default getWeather;

