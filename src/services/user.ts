import axios from "axios";

export const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
       return response.data
      })
    .catch((error) => {
        return error
    })

}
