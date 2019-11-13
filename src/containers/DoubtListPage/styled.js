import styled from 'styled-components'

export const DoubtListMainContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
    align-items:center;
    background: #a7bac5;
`

export const BodyPostsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    margin-bottom: 10%;
`


export const AddPostBar = styled.div`
    display: flex;
    height: 50px;
    width:90%;
    align-items:center;
    background: #f47e20;
    justify-content: space-evenly;
    border-radius: 30px;
    position: fixed;
    bottom: 1%;
    border: 2px solid #45525b;
`

export const InputAddPostBar = styled.input`
    background:transparent;
    border:none;
    width:30%;
    color:white;
    font-size:16px;
    height:80%;
    border-radius:30px;
    padding-left: 10px;
    
    ::placeholder{
        color:#45525b;
        padding-left: 10px;
    }

    :focus{
        outline:none;
    }

    :hover{
        background: #FF9D57;
    }
`
 