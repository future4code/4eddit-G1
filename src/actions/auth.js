import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";
import { setErrorMsg } from "./index";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit'

export const login = (email,password)=>async (dispatch)=>{
    try{
        dispatch(setErrorMsg(false))
        const data = {
            email: email,
            password: password
        }

        const response = await axios.post(`${urlBase}/login`, data)

        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.list))
    } catch (err){
        dispatch(setErrorMsg('Usuário ou senha não cadastrados.'))
    }
}

export const signUp = (email,password,username)=>async (dispatch)=>{
    try{

        const data = {
            email: email,
            password: password,
            username: username
        }

        const response = await axios.post(`${urlBase}/signup`, data)

        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.list))
    } catch (err){
        console.log(err)
    }
}