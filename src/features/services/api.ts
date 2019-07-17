import Axios from "axios";
import { Clouds, Weather } from '../models/weather.model';

const BASE_URL = "api.openweathermap.org/data/2.5/weather?q=London,uk";
const KEY_URL = "&APPID=57e71e29e268016d12932485490524a7";



export class Api {
    public static Cities = class {
        public static getCitiesData = (filter: any) => {
            return Axios.get(BASE_URL + KEY_URL); 
    };



    public static OrganizationalUnits = class {
        public static getOrganizationalUnit = (id: string) => {
            return Axios.get(BASE_URL + "/api/membership/organizational-units/" + id);
        }

    };
}
}
