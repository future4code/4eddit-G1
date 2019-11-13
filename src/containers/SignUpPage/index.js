import React from "react";
import { routes } from '../Router'
import styled from 'styled-components'
import { MainContainer } from '../../style/styled'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
 
class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <div>SignUp</div>
        )
    }
}

// mapStateToProps= state =>({

// })

// mapDispatchToProps=dispatch=>({

// })

export default connect(null, null)(SignUp)