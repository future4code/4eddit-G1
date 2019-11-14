const initialState = {
    allPosts: [],
    currentIdPost: "",
    detailsPost: {}
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return { ...state, allPosts: action.payload.posts }
        case "SET_CURRENT_POST":
            return { ...state, currentIdPost: action.payload.currentPost }
        case "SET_DETAILS_POST":
            return { ...state, detailsPost: action.payload.detailsPost }
        default:
            return state
    }
}

export default posts