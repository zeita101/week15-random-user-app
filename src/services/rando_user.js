import axios from 'axios';

const BASE_URL = "https://api.randomuser.me/"

export const fetchUser = async () => {
    let response = await axios.get(BASE_URL)
    //let data = await response.json()
    return response
}

