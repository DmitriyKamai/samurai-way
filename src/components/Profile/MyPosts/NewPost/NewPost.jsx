import React from "react";
import s from './NewPost.module.css';
import { reduxForm, Field } from "redux-form";
import { maxLength10, required } from "../../../../utils/validators/validators";
import { CustomField } from "../../../common/FormControls/FormsControls";

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
      <Field validate={[required, maxLength10]} className={s.newPostArea} fieldType='textarea' placeholder="Write message" name="newPost" component={CustomField}/>
      <button className={s.sendNewPost}>Add new post</button>
    </form>
  )
}

const NewPostReduxForm = reduxForm(
  { form: 'ProfileAddNewPostForm' }
)(NewPostForm)

export default NewPost;