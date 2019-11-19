import { setPosts, setCurrentPost, setErrorMsg, setDetailsPost, createPost, getPosts } from './'
import axios from 'axios';

jest.mock('axios');

describe("testing post actions", () => {
    test("SetPosts", () => {
        const expectedSetPosts = {
            type: 'SET_POSTS',
            payload: {
                posts: [{ id: 1, title: "ola", text: "oi sou uma desc", username: "Test" }, { id: 2, title: "ola2", text: "oi sou uma desc2", username: "Test2" }]
            }
        }
        const result = setPosts([{ id: 1, title: "ola", text: "oi sou uma desc", username: "Test" }, { id: 2, title: "ola2", text: "oi sou uma desc2", username: "Test2" }])
        expect(expectedSetPosts).toMatchObject(result)
    })

    test("SetCurrentPost", () => {
        const expectedSetPosts = {
            type: 'SET_CURRENT_POST',
            payload: {
                currentPost: { id: 1, title: "ola", text: "oi sou uma desc", username: "Test" }
            }
        }
        const result = setCurrentPost({ id: 1, title: "ola", text: "oi sou uma desc", username: "Test" })
        expect(expectedSetPosts).toMatchObject(result)
    })

    test("SetCurrentPost", () => {
        const expectedSetPosts = {
            type: 'SET_ERROR_MSG',
            payload: {
                errorMsg: "Deu ruim"
            }
        }
        const result = setErrorMsg("Deu ruim")
        expect(expectedSetPosts).toMatchObject(result)
    })

    test("setDetailsPost", () => {
        const expectedSetPosts = {
            type: 'SET_DETAILS_POST',
            payload: {
                detailsPost: { id: 1, title: "ola", text: "oi sou uma desc", username: "Test", comments: [] }
            }
        }
        const result = setDetailsPost({ id: 1, title: "ola", text: "oi sou uma desc", username: "Test", comments: [] })
        expect(expectedSetPosts).toMatchObject(result)
    })

    test("createPost", async () => {
        axios.post = jest.fn()
        const mockedDispatch = jest.fn()
        const result = await createPost("title", "text")(mockedDispatch)
        const expectedBody= {
            title: "title",
            text: "text"
        }
        expect(axios.post).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts', expectedBody,{
            headers:{
                auth: null
            }
        })
    })

    test("getPosts", async () => {
        axios.get = jest.fn(()=>{
            return {data:{posts:[]}}
        })
        const mockedDispatch = jest.fn()
        const result = await getPosts()(mockedDispatch)
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts',{
            headers:{
                auth: null
            }
        })
    })
})