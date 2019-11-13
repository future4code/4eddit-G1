import React from "react";
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { AnswerCardMainContainer, HeaderPostContent, UserName, BodyPostContent, FooterPostContent, ButtonArea, ComentWords, UpArrow, DownArrow } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { PostCardMainContainer } from '../PostCard/styled'

const AvatarStyled = styled(Avatar)`
    background: #f47e20;
    width:30px;
    height:30px;
`

class AnswerCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            
            <AnswerCardMainContainer>
                <HeaderPostContent><AvatarStyled>B</AvatarStyled><UserName>Brunna</UserName></HeaderPostContent>
                <BodyPostContent>
                <p>eu ja tentei de tudo, fiz os imports, ja verifiquei os nomes e mesmo assim continuo com este problema, alguem me salva por favor?</p>
                </BodyPostContent>
                <FooterPostContent>
                    <ButtonArea>
                    <UpArrow src={require('../../assets/up.png')} alt="up"/>
                    <span>0</span>
                    <DownArrow src={require('../../assets/up.png')} alt="down"/>
                    </ButtonArea>
                </FooterPostContent>
            </AnswerCardMainContainer>
           
        )
    }
}

// mapStateToProps= state =>({

// })

// mapDispatchToProps=dispatch=>({

// })

export default connect(null, null)(AnswerCard)