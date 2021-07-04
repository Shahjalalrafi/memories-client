import './App.css';
import { Container, Typography, Grid, AppBar, Grow} from '@material-ui/core'

import {getPosts} from './Actions/posts'
import Form from './Component/Form/Form';
import Posts from './Component/Posts/Posts';
import memories from './images/memories.png'

import useStyles from './Styles'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts)
  }, [dispatch])
  return (
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} color="inherit" position="static">
        <Typography className={classes.heading} align="center" variant="h2">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
}

export default App;
