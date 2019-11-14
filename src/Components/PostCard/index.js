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

class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    updateVote = (votes) => {
        const totalVotes = (this.props.votesCount + votes)
        this.props.updateVotes(totalVotes, this.props.postId)
    }

    lockId = () => {
        this.props.setCurrentPost(this.props.postId)
        this.props.goToDetailPage()
    }


    render() {

        const { goToDetailPage, username, title, votesCount, commentsNumber, postId } = this.props

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
                        <UpArrow onClick={() => this.updateVote(1)} src={require('../../assets/up.png')} alt="up" />
                        <span>{votesCount ? votesCount : 0}</span>
                        <DownArrow onClick={() => this.updateVote(-1)} src={require('../../assets/up.png')} alt="down" />
                    </ButtonArea>
                    <ComentWords onClick={this.lockId}>{commentsNumber ? commentsNumber : 0} comentários</ComentWords>
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