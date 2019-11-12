const initialState = {
    
}

const posts = (state = initialState, action)=>{
    switch (action.type){
        case "SET_POSTS":
        return {...state, allPosts:[]}
        default:
            return state
    }
}

export default posts