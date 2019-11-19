import React from "react";
import { routes } from '../Router'
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { DoubtListMainContainer, BodyPostsContainer, AddPostBar, InputAddPostBar } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import PostCard from '../../Components/PostCard';
import { getPosts, createPost, setErrorMsg } from '../../actions';


const SearchIconStyled = styled(SearchIcon)`
    color:white;
`

const LogoAppBarStyled = styled(LogoAppBar)`
    cursor:pointer;
`

export const SendIconStyled = styled(SendIcon)`
    color: #45525b;
    border-radius:50%;
    font-size:30px;
    cursor:pointer;

    :hover{
        color:white;
    }
`

export class DoubtList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texttyped: "",
            titletyped: "",
            textFiltered: ""
        }
    }

    componentDidMount() {
        this.props.getPosts()

        const token = window.localStorage.getItem('token')

        if (token === null) {
            this.props.setErrorMsg('Faça login para acessar a página solicitada.')
            this.props.goToHomePage()
        }
    }

    onClickCreatePost = () => {
        this.props.createPost(this.state.titletyped, this.state.texttyped)
        this.setState({ texttyped: "", titletyped: "" })
    }

    onTypeText = (event) => {
        this.setState({ texttyped: event.target.value })
    }

    onTypeTitle = (event) => {
        this.setState({ titletyped: event.target.value })
    }

    onTypeFilter = (event) => {
        this.setState({ textFiltered: event.target.value })
    }

    render() {

        const { goToDetailPage, allPosts, goToHomePage } = this.props
        let listPosts
       
        const filtered = allPosts.filter(post=> post.title ? post.title.toLowerCase().search(this.state.textFiltered.toLowerCase()) !== -1 : null)

        listPosts = filtered.map((post, index) => {
            return <PostCard
                key={index}
                username={post.username}
                title={post.title}
                votesCount={post.votesCount}
                commentsNumber={post.commentsNumber}
                postId={post.id}
                userVoteDirection={post.userVoteDirection}
            />
        })
    

        return (
            <DoubtListMainContainer>
                <AppBar>
                    <LogoAppBarStyled onClick={goToHomePage} src={require('../../assets/logoBranco.png')} alt="logo FutureFlow" />
                    <SearchAppBar><SearchIconStyled /><InputSearchAppBar value={this.state.textFiltered} onChange={this.onTypeFilter} type="text" /></SearchAppBar>
                </AppBar>
                <BodyPostsContainer>
                    {listPosts}
                </BodyPostsContainer>
                <AddPostBar>
                    <InputAddPostBar
                        placeholder="Título"
                        onChange={this.onTypeText}
                        value={this.state.texttyped}
                    />
                    <InputAddPostBar
                        placeholder="Descrição"
                        onChange={this.onTypeTitle}
                        value={this.state.titletyped}
                    />
                    <SendIconStyled onClick={this.onClickCreatePost} />
                </AddPostBar>
            </DoubtListMainContainer>
        )
    }
}

const mapStateToProps = state => ({
    allPosts: state.posts.allPosts

})

const mapDispatchToProps = dispatch => ({
    goToDetailPage: () => dispatch(push(routes.detail)),
    goToHomePage: () => dispatch(push(routes.home)),
    getPosts: () => dispatch(getPosts()),
    createPost: (titletyped, texttyped) => dispatch(createPost(titletyped, texttyped)),
    setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoubtList)