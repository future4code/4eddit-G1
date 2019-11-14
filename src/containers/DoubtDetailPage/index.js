import React from "react";
import { routes } from '../Router'
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { DoubtListMainContainer, BodyPostsContainer, AddPostBar, InputAddPostBar } from '../DoubtListPage/styled'
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import QuestionCard from '../../Components/QuestionCard';
import { PostCardMainContainer } from '../../Components/PostCard/styled';
import AnswerCard from "../../Components/AnswerCard";
import { getPostDetails } from '../../actions'

const SearchIconStyled = styled(SearchIcon)`
    color:white;
`

const LogoAppBarNav = styled(LogoAppBar)`
    cursor:pointer;
`

const PostAnswersMainContainer = styled(PostCardMainContainer)`
    cursor: default; 
    margin-bottom: 8%;
`

const InputAddPostBarStyled = styled(InputAddPostBar)`
    width:60%;
`

const SendIconStyled = styled(SendIcon)`
    color: #45525b;
    border-radius:50%;
    font-size:30px;
    cursor:pointer;

    :hover{
        color:white;
    }
`

class DoubtDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: ""
        }
    }

    componentDidMount() {

        if (this.props.currentIdPost) { this.props.getPostDetails(this.props.currentIdPost) }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }



    render() {

        const { goToHomePage, detailsPost } = this.props
        let answersList

        if (detailsPost.comments) {

        console.log(detailsPost.comments)
            let answersList = detailsPost.comments.map((comment, index) => {
                return <AnswerCard
                    key={index}
                    username={comment.username}
                    text={comment.text}
                    votesCount={comment.votesCount}
                    userVoteDirection={comment.userVoteDirection}
                />
            })
        } else { let answersList = <AnswerCard/> }
        return (
            <DoubtListMainContainer>
                <AppBar>
                    <LogoAppBarNav onClick={goToHomePage} src={require('../../assets/logoBranco.png')} alt="logo FutureFlow" />
                    <SearchAppBar><SearchIconStyled /><InputSearchAppBar type="text" /></SearchAppBar>
                </AppBar>
                <BodyPostsContainer>
                    <PostAnswersMainContainer>
                        <QuestionCard
                            username={detailsPost.username}
                            title={detailsPost.title}
                            text={detailsPost.text}
                            votesCount={detailsPost.votesCount}
                            commentsNumber={detailsPost.commentsNumber}
                        />
                        {answersList}
                    </PostAnswersMainContainer>
                </BodyPostsContainer>
                <AddPostBar>
                    <InputAddPostBarStyled
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleInput}
                        type="text"
                        placeholder="Comentar"
                    />
                    <SendIconStyled />
                </AddPostBar>
            </DoubtListMainContainer>
        )
    }
}

const mapStateToProps = state => ({
    currentIdPost: state.posts.currentIdPost,
    detailsPost: state.posts.detailsPost
})

const mapDispatchToProps = dispatch => ({
    goToHomePage: () => dispatch(push(routes.home)),
    getPostDetails: (postId) => dispatch(getPostDetails(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DoubtDetail)