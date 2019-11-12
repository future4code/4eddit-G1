import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit'

export const login = (email,password)=>async (dispatch)=>{
    try{

        const data = {
            email: email,
            password: password
        }

        const response = await axios.post(`${urlBase}/login`, data)

        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.home))
    } catch (err){
        console.log(err)
    }
}

export const signUp = (email,password,username)=>async (dispatch)=>{
    try{

        const data = {
            email: email,
            password: password,
            username: username
        }

        const response = axios.post(`${urlBase}/signup`, data)

        console.log(response)
    } catch (err){
        console.log(err)
    }
}