import React from "react";
import { routes } from '../Router'
import styled from 'styled-components'
import { MainContainer } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import {LoginContent, DoubtListMainContainer, InputAddPostBar, LoginArea, ButtonArea, ButtonStyled} from './styled'
import {LogoAppBar} from '../../style/styled'
import { login } from '../../actions/auth'
 
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
        }
    }

    handleInput=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    doLogin=(event)=>{
        event.preventDefault()
        this.props.doLogin(this.state.email, this.state.password)
    }

    render(){
        return(
            <DoubtListMainContainer>
                <LoginContent>
                <LogoAppBar src={require('../../assets/logoBranco.png')} alt="logo FutureFlow" />
                <form onSubmit={this.doLogin}>
                <LoginArea>
                <InputAddPostBar 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleInput} 
                    type="email" 
                    placeholder="Email"
                />
                <InputAddPostBar 
                    onChange={this.handleInput} 
                    name="password" 
                    value={this.state.password} 
                    type="password" 
                    placeholder="Senha"
                />
                <ButtonArea>
                <ButtonStyled>Entrar</ButtonStyled>
                <ButtonStyled>Registrar</ButtonStyled>
                </ButtonArea>
                </LoginArea>
                </form>
                </LoginContent>
            </DoubtListMainContainer>
        )
    }
}

// mapStateToProps= state =>({

// })

const mapDispatchToProps=dispatch=>({
    doLogin: (email,password)=>dispatch(login(email,password))
})

export default connect(null, mapDispatchToProps)(Login)
