import React from 'react';
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import useStyles from './Styles'
import { useState } from 'react';
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost } from '../../Actions/posts';

const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [postData, setPostData] = useState({
        creator: "", title: "", message:"", tags: "", selectedFile: "", 
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createPost(postData))
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h4">
                Creating a Memory
                </Typography>
                <TextField variant="outlined" label="creator" name="creator" value={postData.creator} fullWidth onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
                <TextField variant="outlined" label="title" name="title" value={postData.title} fullWidth onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
                <TextField variant="outlined" label="message" name="message" value={postData.message} fullWidth onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
                <TextField variant="outlined" label="Tags" name="tags" value={postData.tags} fullWidth onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button variant="contained" className={classes.buttonSubmit} color="primary" size="large" type="submit" fullwidth >Submit</Button>
                <Button variant="contained" color="secondary" size="large" onClick={clear} fullwidth >Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;