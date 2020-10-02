import React from 'react';
import classes from './myposts.module.css'
import Post from './post/post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formsControl/formsControl";


const MyPosts = React.memo((props) => {

    console.log(props);

    let onAddPost = (values) => {
        props.addPost(values.newTextPost)
    }

    let postElements =
        props.postData.map(massage => <Post massage={massage.massage} key={massage.id}
                                            likeCount={massage.likesCount}/>);
    return (
        <div className={classes.myPosts}>
            <div>
                <h3>My post</h3>
            </div>
            <PostReduxForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
})

const maxLength50 = maxLengthCreator(50);

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength50]} placeholder={'Input new post'} component={Textarea}
                       name={'newTextPost'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}


const PostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;