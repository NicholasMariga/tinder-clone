import axios from 'axios'

// create an instance

const instance = axios.create({
    //baseURL: "http://localhost:8001",
    baseURL:"https://tinderclon-backend.herokuapp.com",
});

export default instance;