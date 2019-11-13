import styled from 'styled-components'

export const DoubtListMainContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    justify-content:center;
    align-items:center;
    background: #a7bac5;
`

export const LoginContent = styled.div`
    display:flex;
    flex-direction:column;
    min-height:50vh;
    width:60%;
    justify-content: space-evenly;
    align-items:center;
    background: #f47e20;
    border-radius:30px;
    border: 2px solid white;
    padding:5%;
`

export const LoginArea = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:20vh;
`

export const ButtonArea = styled.div`
    display:flex;
    justify-content:space-evenly;
`

export const ButtonStyled = styled.button`
background: #46535a;
border: 1px solid white;
padding:10px  15px;
color:white;
border-radius:10px;
box-shadow: 0 2px 5px black;

:active{
    position:relative;
    top:1px;
}

:focus{
    outline:none;
}
`


export const InputAddPostBar = styled.input`
    border:none;
    color:white;
    font-size:16px;
    border-radius:30px;
    padding-left: 10px;
    background: #FF9D57;
    
    ::placeholder{
        color:#45525b;
        padding-left: 10px;
    }

    :focus{
        outline:none;
    }
    
`