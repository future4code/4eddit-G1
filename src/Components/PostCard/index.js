import React from "react";
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { routes } from '../../containers/Router'
import { push } from 'connected-react-router'
import { PostCardMainContainer, HeaderPostContent, UserName, BodyPostContent, FooterPostContent, ButtonArea, ComentWords, UpArrow, DownArrow } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import AnswerCard from "../AnswerCard";

const AvatarStyled = styled(Avatar)`
    background: #f47e20;
    width:30px;
    height:30px;
`

class PostCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){

        const {goToDetailPage} = this.props

        return(
            <PostCardMainContainer onClick={goToDetailPage}>
                <HeaderPostContent><AvatarStyled>B</AvatarStyled><UserName>Brunna</UserName></HeaderPostContent>
                <BodyPostContent>
                <h3>Como eu ligo meu app ao redux?</h3>
                </BodyPostContent>
                <FooterPostContent>
                    <ButtonArea>
                    <UpArrow src={require('../../assets/up.png')} alt="up"/>
                    <span>0</span>
                    <DownArrow src={require('../../assets/up.png')} alt="down"/>
                    </ButtonArea>
                    
                    <ComentWords>2 comentários</ComentWords>
                </FooterPostContent>
            </PostCardMainContainer>
        )
    }
}

// mapStateToProps= state =>({

// })

const mapDispatchToProps=dispatch=>({
    goToDetailPage: () => dispatch(push(routes.detail))
})

export default connect(null, mapDispatchToProps)(PostCard)