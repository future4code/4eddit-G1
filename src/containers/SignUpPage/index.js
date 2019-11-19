import React from "react";
import { routes } from '../Router'
import styled from 'styled-components'
import { MainContainer } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import {LoginContent, DoubtListMainContainer, InputAddPostBar, LoginArea, ButtonArea, ButtonStyled} from './styled'
import {LogoAppBar} from '../../style/styled'
import { signUp } from '../../actions/auth'
 
class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            username:"",
            password:"",
        }
    }

    handleInput=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    doSignUp=(event)=>{
        event.preventDefault()
        this.props.signUp(this.state.email, this.state.password, this.state.username)
    }

    render(){
        return(
            <DoubtListMainContainer>
                <LoginContent>
                <LogoAppBar src={require('../../assets/logoBranco.png')} alt="logo FutureFlow" />
                <form onSubmit={this.doSignUp}>
                <LoginArea>
                <h3>Registrar : </h3>
                <InputAddPostBar 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleInput} 
                    type="text" 
                    placeholder="Nome"
                />
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
                <ButtonStyled>Registrar</ButtonStyled>
                <ButtonStyled onClick={this.props.goToHomePage}>Voltar</ButtonStyled>
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
    signUp: (email,password, username)=>dispatch(signUp(email,password, username)),
    goToHomePage: () => dispatch(push(routes.home)),
})

export default connect(null, mapDispatchToProps)(SignUp)
