import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from ".//actions/posts"
import Posts from ".//components/form/form.js";
import Form from ".//components/posts/posts.js";
import useStyles from "./styles"

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
    <Container maxWidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography variant="h2" align="center">Memories</Typography>
     </AppBar>
     <Grow in>
      <Container>
       <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
         <Posts />
        </Grid>
        <Grid item xs={12} sm={7}>
         <Form />
        </Grid>
       </Grid>
      </Container>
      </Grow>
     <h5 align="center">Created by Collin Hooper</h5>
    </Container>
    </>

  );
}

export default App;
