import axios from 'axios'

const AXIOS = axios.create({
    baseURL: "https://contact-manage-server.vercel.app",
})

export default AXIOS;