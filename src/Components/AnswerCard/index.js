import React from "react";
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { AnswerCardMainContainer, HeaderPostContent, UserName, BodyPostContent, FooterPostContent, ButtonArea, ComentWords, UpArrow, DownArrow } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { PostCardMainContainer } from '../PostCard/styled'
import { voteCommentPosts } from "../../actions";

const AvatarStyled = styled(Avatar)`
    background: #f47e20;
    width:30px;
    height:30px;
`

class AnswerCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    updateVote = (vote) => {
        if (this.props.userVoteDirection !== vote) {
            this.props.voteCommentPosts(Number(vote), this.props.postId, this.props.commentId)
        } else if (this.props.userVoteDirection === vote) {
            this.props.voteCommentPosts(0, this.props.postId, this.props.commentId)
        }
    }

    render() {
        let imgup
        if (this.props.userVoteDirection === 1) {
            imgup = require('../../assets/upOrange.png')
        } else {
            imgup = require('../../assets/up.png')
        }

        let imgdown
        if (this.props.userVoteDirection === -1) {
            imgdown = require('../../assets/upOrange.png')
        } else {
            imgdown = require('../../assets/up.png')
        }

        return (

            <AnswerCardMainContainer>
                <HeaderPostContent>
                    <AvatarStyled>
                        {this.props.username ? this.props.username.substr(0, 1) : "F4"}
                    </AvatarStyled>
                    <UserName>
                        {this.props.username}
                    </UserName>
                </HeaderPostContent>
                <BodyPostContent>
                    <p>{this.props.text}</p>
                </BodyPostContent>
                <FooterPostContent>
                    <ButtonArea>
                        <UpArrow onClick={() => this.updateVote(1)} src={imgup} alt="up" />
                        <span>{this.props.votesCount}</span>
                        <DownArrow onClick={() => this.updateVote(-1)} src={imgdown} alt="down" />
                    </ButtonArea>
                </FooterPostContent>
            </AnswerCardMainContainer>

        )
    }
}

// mapStateToProps= state =>({

// })

const mapDispatchToProps = dispatch => ({
    voteCommentPosts: (vote, postId, commentId) => dispatch(voteCommentPosts(vote, postId, commentId)),
})

export default connect(null, mapDispatchToProps)(AnswerCard)