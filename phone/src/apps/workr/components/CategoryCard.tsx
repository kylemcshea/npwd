import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Paper } from '@mui/material';
import { ListItem } from '@ui/components/ListItem';
import { Category } from '../hooks/state';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '3px',
  },
  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      background: '#03bb85',
    },
    transition: theme.transitions.create(['background', 'background-color'], {
      duration: theme.transitions.duration.complex,
    }),
  },
  paper: {
    overflow: 'auto',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex',
    borderWidth: 2,
    height: 'auto',
    background: theme.palette.background.paper,
    marginBottom: 20,
  },
  listingContent: {
    padding: 10,
    minWidth: 100,
    maxWidth: '100%',
    width: '100%',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
}));

export const CategoryCard: React.FC<Category> = ({ children, ...cat }) => {
  const classes = useStyles();
  return (
    <Link to={'workr/cat?type=' + cat.title}>
      <ListItem className={classes.root}>
        <div className={classes.content}>
          <Paper variant="outlined" className={classes.paper}>
            <div style={{ margin: 10 }}>
              <Typography style={{ margin: 5 }} variant="h5">
                {cat.title}
              </Typography>
              {cat.amountOnline}
            </div>
          </Paper>
        </div>
      </ListItem>
    </Link>
  );
};
