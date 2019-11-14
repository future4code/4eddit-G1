import React from "react";
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { QuestionCardMainContainer, HeaderPostContent, UserName, BodyPostContent, FooterPostContent, ButtonArea, ComentWords, UpArrow, DownArrow } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import AnswerCard from "../AnswerCard";

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

    render() {
        return (
            <QuestionCardMainContainer>
                <HeaderPostContent>
                    <AvatarStyled>{this.props.username ? this.props.username.substr(0, 1) : "F40"}
                    </AvatarStyled>
                    <UserName>{this.props.username}</UserName>
                </HeaderPostContent>
                <BodyPostContent>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                </BodyPostContent>
                <FooterPostContent>
                    <ButtonArea>
                        <UpArrow src={require('../../assets/up.png')} alt="up" />
                        <span>{this.props.votesCount}</span>
                        <DownArrow src={require('../../assets/up.png')} alt="down" />
                    </ButtonArea>

                    <ComentWords>
                        {this.props.commentsNumber ? this.props.commentsNumber : 0 } comentários
                    </ComentWords>
                </FooterPostContent>
            </QuestionCardMainContainer>
        )
    }
}

// mapStateToProps= state =>({

// })

// mapDispatchToProps=dispatch=>({

// })

export default connect(null, null)(QuestionCard)