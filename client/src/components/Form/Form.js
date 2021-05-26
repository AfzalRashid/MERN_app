/*eslint-disable*/
import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import {TextField, Typography, Paper, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {createPost, updatePost} from '../../actions/posts'


    
const Form=({currentID, setCurrentID })=>{

    const [postData, setPostData] = useState({creator:'', title:'', message:'', tags:'', selectedFile:''})
    const post = useSelector((state)=>(currentID ? state.posts.find((p)=>p._id===currentID):null))
    const classes = useStyles()
    const dispatch=useDispatch()
    useEffect(()=>{
        if(post) setPostData(post)
    },
    [post])
    const handleSubmit=(e)=>{
e.preventDefault()
if(currentID){
    dispatch(updatePost(currentID, postData))
}
else{
dispatch(createPost(postData))
}
    }
    const clear=()=>{}
    return <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a memory</Typography>
            <TextField 
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e)=>{setPostData((prevState)=>{return {...prevState, creator:e.target.value}})}}
            />
            <TextField 
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e)=>{setPostData((prevState)=>{
                return {...prevState, title: e.target.value}
            }
            )
        }
    }
            />
            <TextField 
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e)=>{setPostData((prevState)=>{return {...prevState, message:e.target.value}})}}
            />
            <TextField 
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e)=>{setPostData((prevState)=>{return {...prevState, tags:e.target.value}})}}
            />
            <div className={classes.fileInput}>
                <FileBase
                type="file"
                multiple={false}
                onDone={({base64})=>setPostData((prevState)=>{return {...prevState, selectedFile:base64}})}
                />
            </div>
<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>

        </form>

    </Paper>
}

export default Form