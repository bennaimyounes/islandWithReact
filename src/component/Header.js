import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({}))

function App() {
  const classes = useStyles();
  return (
    <div>
        <AppBar>
            <h1>MyIsland.</h1>
            <SortIcon />
        </AppBar>
    </div>
  );
}
export default App;