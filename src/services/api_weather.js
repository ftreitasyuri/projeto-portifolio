import axios from "axios";

const apiWeather = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5`,
});

export default apiWeather;
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={ec3e5be3d5fd36e296904389ad345a7c}