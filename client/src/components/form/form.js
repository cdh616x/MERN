import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts.js";

const Form = () => {
  const [postData, setPostData] = useState({creator: "", title: "", message: "", tags:""});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  }

  const clear = () => {

  }



  return (
    <Paper>
     <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Typography variant="h6">Create a Post</Typography>
      <TextField name="creator" variant="outlined" label="Creator" fullWidth value = {postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      <TextField name="title" variant="outlined" label="Title" fullWidth value = {postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <TextField name="message" variant="outlined" label="Message" fullWidth value = {postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      <TextField name="tags" variant="outlined" label="Tags" fullWidth value = {postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
      <div>
       <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} />
      </div>
      <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" onClick={clear} fullWidth>Clear</Button>
     </form>
    </Paper>
  );
}



export default Form;
