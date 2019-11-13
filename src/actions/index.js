import axios from 'axios'

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit'

export const getPosts = () => async (dispatch) => {

    const token = window.localStorage.getItem("token");

    const response = await axios.get(`${urlBase}/posts`,{
        headers:{
            auth: token
        }
    })

    console.log(response.data.posts)
}