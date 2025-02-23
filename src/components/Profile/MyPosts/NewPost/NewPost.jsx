import React from "react";
import s from './NewPost.module.css';
import { reduxForm, Field } from "redux-form";

const NewPost = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
    props.addPost(formData.newPost)
  }

  return (
    <div className={s.newPost}>
      <div className={s.newPostTitle}>New post</div>
      <NewPostReduxForm {...props} onSubmit={onSubmit} />
    </div>
  )
}

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.newPostForm}>
      <Field className={s.newPostArea} placeholder="Write message" name="newPost" component='textarea' />
      <button className={s.sendNewPost}>Add new post</button>
    </form>
  )
}

const NewPostReduxForm = reduxForm(
  { form: 'ProfileAddNewPostForm' }
)(NewPostForm)

export default NewPost;