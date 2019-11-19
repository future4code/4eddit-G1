import React from "react";
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { routes } from '../../containers/Router'
import { push } from 'connected-react-router'
import { PostCardMainContainer, HeaderPostContent, UserName, BodyPostContent, PostTitle, FooterPostContent, ButtonArea, ComentWords, UpArrow, DownArrow } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import AnswerCard from "../AnswerCard";
import { votePosts, setCurrentPost } from "../../actions";

const AvatarStyled = styled(Avatar)`
    background: #f47e20;
    width:30px;
    height:30px;
`

export class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    updateVote = (vote) => {
        if(this.props.userVoteDirection!==vote){
            this.props.updateVotes(Number(vote), this.props.postId)
        }else if(this.props.userVoteDirection===vote){
            this.props.updateVotes(0, this.props.postId)
        }
    }

    lockId = () => {
        this.props.setCurrentPost(this.props.postId)
        this.props.goToDetailPage()
    }


    render() {

        const { goToDetailPage, username, title, votesCount, commentsNumber, postId } = this.props

        let imgup
        if(this.props.userVoteDirection===1){
            imgup = require('../../assets/upOrange.png')
        }else{
            imgup = require('../../assets/up.png')
        }

        let imgdown
        if(this.props.userVoteDirection===-1){
            imgdown = require('../../assets/upOrange.png')
        }else{
            imgdown = require('../../assets/up.png')
        }

        return (
            <PostCardMainContainer>
                <HeaderPostContent>
                    <AvatarStyled>{username ? username.substr(0, 1) : ""}</AvatarStyled>
                    <UserName>{username}</UserName>
                </HeaderPostContent>
                <BodyPostContent>
                    <PostTitle onClick={this.lockId}>{title}</PostTitle>
                </BodyPostContent>
                <FooterPostContent>
                    <ButtonArea>
                        <UpArrow onClick={() => this.updateVote(1)} src={imgup} alt="up" />
                        <span>{votesCount ? votesCount : 0}</span>
                        <DownArrow onClick={() => this.updateVote(-1)} src={imgdown} alt="down" />
                    </ButtonArea>
                    <ComentWords onClick={this.lockId}>{commentsNumber ? commentsNumber : 'sem'} {commentsNumber === 1 ? 'comentário' : 'comentários'}</ComentWords>
                </FooterPostContent>
            </PostCardMainContainer>
        )
    }
}

// mapStateToProps= state =>({

// })

const mapDispatchToProps = dispatch => ({
    goToDetailPage: () => dispatch(push(routes.detail)),
    updateVotes: (vote, postId) => dispatch(votePosts(vote, postId)),
    setCurrentPost: (currentPostId) => dispatch(setCurrentPost(currentPostId))
})

export default connect(null, mapDispatchToProps)(PostCard)