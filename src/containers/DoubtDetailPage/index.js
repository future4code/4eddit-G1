import React from "react";
import { routes } from '../Router'
import styled from 'styled-components'
import { AppBar, LogoAppBar, SearchAppBar, InputSearchAppBar } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { DoubtListMainContainer, BodyPostsContainer, AddPostBar, InputAddPostBar } from '../DoubtListPage/styled'
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import PostCard from '../../Components/PostCard';
import { PostCardMainContainer } from '../../Components/PostCard/styled';
import AnswerCard from "../../Components/AnswerCard";

const SearchIconStyled = styled(SearchIcon)`
    color:white;
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

    render() {
        return (
            <DoubtListMainContainer>
            <AppBar>
                <LogoAppBar src={require('../../assets/logoBranco.png')} alt="logo FutureFlow" />
                <SearchAppBar><SearchIconStyled /><InputSearchAppBar type="text" /></SearchAppBar>
            </AppBar>
            <BodyPostsContainer>
                <PostCard />
                <PostCardMainContainer>
                <AnswerCard />
                <AnswerCard />
                </PostCardMainContainer>
                
            </BodyPostsContainer>
            <AddPostBar>
                    <InputAddPostBarStyled placeholder="Comentar"/>
                    <SendIconStyled/>
            </AddPostBar>
        </DoubtListMainContainer>
        )
    }
}

// mapStateToProps= state =>({

// })

// mapDispatchToProps=dispatch=>({

// })

export default connect(null, null)(DoubtDetail)