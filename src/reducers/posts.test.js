import posts from './posts'
import { testNameToKey } from 'jest-snapshot/build/utils'

const mockPosts = [{id:1, title: "ola", text: "oi sou uma desc", username: "Test"}, {id:2, title: "ola2", text: "oi sou uma desc2", username: "Test2"}]

describe("Posts Reducer", ()=>{
    test("SetPosts",()=>{
        const testAction = {
            type: 'SET_POSTS',
            payload: {
                posts : [{id:1, title: "ola", text: "oi sou uma desc", username: "Test"}, {id:2, title: "ola2", text: "oi sou uma desc2", username: "Test2"}]
            }
          };
          const newState = posts(undefined, testAction);
          expect(newState.allPosts).toHaveLength(2);
          expect(newState.allPosts[0].title).toBe("ola");
    })

    test("SetCurrentPost",()=>{
        const testAction = {
            type: 'SET_CURRENT_POST',
            payload: {
                currentPost: 1
            }
          };
          const newState = posts(undefined, testAction);
          expect(newState.currentIdPost).toBe(1);
          
    })

    test("SetErrorMsg",()=>{
        const testAction = {
            type: 'SET_ERROR_MSG',
            payload: {
                errorMsg : "Deu Ruim"
            }
          };
          const newState = posts(undefined, testAction);
          expect(newState.errorMsg).toBe("Deu Ruim");
          
    })

    test("SetDetailsPost",()=>{
        const testAction = {
            type: 'SET_DETAILS_POST',
            payload: {
                detailsPost : {id:1, title: "ola", text: "oi sou uma desc", username: "Test"}
            }
          };
          const newState = posts(undefined, testAction);
          expect(newState.detailsPost.username).toBe("Test");
          
    })
})