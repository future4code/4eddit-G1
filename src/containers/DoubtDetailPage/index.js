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

        }
    }

    componentDidMount() {
        this.props.getPostDetails(this.props.currentIdPost)
    }

    render() {

        const { goToHomePage } = this.props

        return (
            <DoubtListMainContainer>
                <AppBar>
                    <LogoAppBarNav onClick={goToHomePage} src={require('../../assets/logoBranco.png')} alt="logo FutureFlow" />
                    <SearchAppBar><SearchIconStyled /><InputSearchAppBar type="text" /></SearchAppBar>
                </AppBar>
                <BodyPostsContainer>
                    <PostAnswersMainContainer>
                        <QuestionCard />
                        <AnswerCard />
                        <AnswerCard />
                    </PostAnswersMainContainer>
                </BodyPostsContainer>
                <AddPostBar>
                    <InputAddPostBarStyled placeholder="Comentar" />
                    <SendIconStyled />
                </AddPostBar>
            </DoubtListMainContainer>
        )
    }
}

const mapStateToProps= state =>({
    currentIdPost: state.posts.currentIdPost
})

const mapDispatchToProps = dispatch => ({
    goToHomePage: () => dispatch(push(routes.home)),
    getPostDetails: (postId) => dispatch(getPostDetails(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DoubtDetail)