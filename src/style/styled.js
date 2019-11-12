import styled from 'styled-components'

export const MainContainer = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
font-family: 'Roboto', sans-serif;
`

export const AppBar = styled.div`
    display: flex;
    height: 60px;
    width:100%;
    align-items:center;
    background: #f47e20;
    justify-content: space-between;
`

export const LogoAppBar = styled.img`
    height:50%;
`

export const SearchAppBar = styled.div`
    background:#FF933B;
    border-radius:5px;
    display:flex;
    justify-content: space-evenly;
    padding: 0.5%;
    margin-right:1%;

    :hover{
        background: #FF9D57;
    }
`

export const InputSearchAppBar = styled.input`
    background:transparent;
    border:none;
    width:70%;
    color:white;
    font-size:16px;

    :focus{
        outline:none;
    }
`

