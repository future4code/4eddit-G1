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
import { getPosts, createPost } from '../../actions';


const SearchIconStyled = styled(SearchIcon)`
    color:white;
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

class DoubtList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            texttyped: "",
            titletyped: "",
        }
    }

    componentDidMount(){
        this.props.getPosts()
    }

    onClickCreatePost = () => {
         this.props.createPost(this.state.titletyped, this.state.texttyped)   
    }

    onTypeText = (event) => {
        this.setState({texttyped:event.target.value})
    }

    onTypeTitle = (event) => {
        this.setState({titletyped:event.target.value})
    }

    render() {

        const{ goToDetailPage, allPosts } = this.props

        const listPosts = allPosts.map((post, index)=> {
            return <PostCard 
            key={index}
            username={post.username}
            title={post.title}
            votesCount={post.votesCount}
            commentsNumber={post.commentsNumber}
            postId={post.id}
            /> 
        })

        return (
            <DoubtListMainContainer>
                <AppBar>
                    <LogoAppBar src={require('../../assets/logoBranco.png')} alt="logo FutureFlow" />
                    <SearchAppBar><SearchIconStyled /><InputSearchAppBar type="text" /></SearchAppBar>
                </AppBar>
                <BodyPostsContainer>
                    {listPosts}
                </BodyPostsContainer>
                <AddPostBar>
                        <InputAddPostBar 
                            placeholder="Título" 
                            onChange={this.onTypeText} 
                            value = {this.state.texttyped} 
                        />
                        <InputAddPostBar 
                            placeholder="Descrição" 
                            onChange={this.onTypeTitle} 
                            value={this.state.titletyped}
                        />
                        <SendIconStyled onClick={this.onClickCreatePost}/>
                </AddPostBar>
            </DoubtListMainContainer>
        )
    }
}

const mapStateToProps= state =>({
    allPosts: state.posts.allPosts

})

const mapDispatchToProps = dispatch => ({
    goToDetailPage: () => dispatch(push(routes.detail)),
    getPosts: () => dispatch(getPosts()),
    createPost: (titletyped, texttyped) => dispatch(createPost(titletyped, texttyped))

})

export default connect(mapStateToProps, mapDispatchToProps)(DoubtList)