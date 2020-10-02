
import {addPostActionCreator, deletePostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './myposts';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
  return{
    postData: state.profilePage.postData,
    newTextPost: state.profilePage.newTextPost
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    addPost: (newTextPost) =>{
      dispatch(addPostActionCreator(newTextPost));
    },
    deletePost: (postId)=>{
      dispatch(deletePostActionCreator(postId))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;