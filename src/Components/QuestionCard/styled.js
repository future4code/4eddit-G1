import styled from 'styled-components'

export const QuestionCardMainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 10px 0;
    width: 100%;
`

export const HeaderPostContent = styled.div`
    display:flex;
    align-items:center;
    margin: 5px;
    width:95%;
`

export const ButtonArea = styled.div`
    display:flex;
    align-items:center;
    width:20%;
    justify-content:space-evenly;
`

export const BodyPostContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 5px 0;
    width:80%;
`

export const FooterPostContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    min-height:30px;
    margin: 10px 0;
    width:80%;
`

export const UserName = styled.span`
    margin:0 5px;
    font-size:16px;
`

export const ComentWords = styled.span`
    margin:0 5px;
    font-size:14px;
    padding: 5px;
    cursor:pointer;

    :hover{
        background:#f47e20;
        color:white;
        border-radius:5px;
        box-shadow: 0 2px 5px gray;
    }
`

export const UpArrow = styled.img`
    cursor:pointer;
    width:15%;

    :hover{
        background:#f47e20;
        border-radius:50%;
        box-shadow: 0 2px 5px orange;
    }
`

export const DownArrow = styled.img`
    cursor:pointer;
    width:15%;
    transform: rotate(180deg);

    :hover{
        background:#f47e20;
        border-radius:50%;
        box-shadow: 0 2px 5px orange;
    }
`
