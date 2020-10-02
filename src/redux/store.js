import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { massage: 'It\'s my first post', id: 2, likesCount: 17 }
      ],
      newTextPost: ''

    },
    dialogsPage: {
      dialogsData: [
        { name: 'Tanya', id: 1 },
        { name: 'Oleg', id: 2 },
        { name: 'Dima', id: 3 },
        { name: 'Props', id: 4 }
      ],
      massagesData: [
        { massage: 'Hello!', id: 1 },
        { massage: 'How are you', id: 2 },
        { massage: '...', id: 3 },
        { massage: 'props easy', id: 4 }
      ],
      newMassagePost: ''
    },
    sidebar: {}
  },
  _rerenderEntireTree() {
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._rerenderEntireTree(this._state);
     
  }

}

export default store;
window.store = store;