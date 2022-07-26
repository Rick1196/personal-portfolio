import Cookies from "js-cookie";
import CryptoJS from 'crypto-js';
import { envValues } from "./consts";

const cookies = Cookies.withConverter({
    write: function (value, name)  {
        return CryptoJS.TripleDES.encrypt(value, envValues.secretKey).toString();
    }
})

export default cookies;