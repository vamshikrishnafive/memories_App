import React, { useSelector } from 'react'
import { CircularProgress, Grid } from '@material-ui/core';

import useStyles from './styles'
import Post from './Post/Post';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems = "stretch" spacing = {3}>
                {posts.map((post) => (
                    <Grid key = {post._id} item xs = {12} sm = {6} md = {6}>
                        <Post post = {post}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;
