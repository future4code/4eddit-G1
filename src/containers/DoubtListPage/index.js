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
                    <PostCard />
                </BodyPostsContainer>
                <AddPostBar>
                        <InputAddPostBar placeholder="Título"/>
                        <InputAddPostBar placeholder="Descrição"/>
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

export default connect(null, null)(DoubtList)