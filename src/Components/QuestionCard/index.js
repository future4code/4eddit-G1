import React from "react";
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { QuestionCardMainContainer, HeaderPostContent, UserName, BodyPostContent, FooterPostContent, ButtonArea, ComentWords, UpArrow, DownArrow } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import AnswerCard from "../AnswerCard";
import { votePosts } from "../../actions";

const AvatarStyled = styled(Avatar)`
    background: #f47e20;
    width:30px;
    height:30px;
`

class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    updateVote = (vote) => {
        if (this.props.userVoteDirection !== vote) {
            this.props.updateVotes(Number(vote), this.props.postId)
        } else if (this.props.userVoteDirection === vote) {
            this.props.updateVotes(0, this.props.postId)
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
            <QuestionCardMainContainer>
                <HeaderPostContent>
                    <AvatarStyled>{this.props.username ? this.props.username.substr(0, 1) : "F4"}
                    </AvatarStyled>
                    <UserName>{this.props.username}</UserName>
                </HeaderPostContent>
                <BodyPostContent>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                </BodyPostContent>
                <FooterPostContent>
                    <ButtonArea>
                        <UpArrow onClick={() => this.updateVote(1)} src={imgup} alt="up" />
                        <span>{this.props.votesCount}</span>
                        <DownArrow onClick={() => this.updateVote(-1)} src={imgdown} alt="down" />
                    </ButtonArea>

                    <span>
                        {this.props.commentsNumber ? this.props.commentsNumber : 'sem'} {this.props.commentsNumber === 1 ? 'comentário' : 'comentários'}
                    </span>
                </FooterPostContent>
            </QuestionCardMainContainer>
        )
    }
}

// mapStateToProps= state =>({

// })

const mapDispatchToProps = dispatch => ({
    updateVotes: (vote, postId) => dispatch(votePosts(vote, postId)),
})

export default connect(null, mapDispatchToProps)(QuestionCard)