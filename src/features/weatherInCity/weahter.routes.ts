import { Component } from 'vue-property-decorator';
import Weather from './view/weather-in-city.vue';
const WeatherRoutes = [
    {
        path: "",
        Component: Weather
    },

];

export default WeatherRoutes;
