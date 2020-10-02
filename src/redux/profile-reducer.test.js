import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

let state = {
    postData: [
        {massage: 'It\'s my first post', id: 1, likesCount: 17},
        {massage: 'Second post', id: 2, likesCount: 9}
    ]
}



it('new post should be = "some text"', () => {
    let action = addPostActionCreator('some text')
    let newState = profileReducer(state, action)
    expect(newState.postData[2].massage).toBe('some text');
});

it('count post should be = 3', () => {
    let action = addPostActionCreator('some text')
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(3);
});

it('delete post', ()=>{
    let action = deletePostActionCreator(1);
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(1);
})

