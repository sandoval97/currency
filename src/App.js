import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Route,Redirect} from 'react-router-dom'
import Home from './components/home/';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(2)
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className={classes.root}>
        <AppBar position="static" className="App-header-bg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Bienvenido!
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Redirect from='' to='/home' />  
        <Route path='/home' component={Home}></Route>
      </main>
    </div>
  );
}

export default App;
