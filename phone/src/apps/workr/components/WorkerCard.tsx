import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import CircularProgress from '@mui/material/CircularProgress';
import { grabWorkerDataByCategory, Worker } from '../hooks/state';
import { useCall } from '@os/call/hooks/useCall';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    width: '100%',
    color: 'white',
    background: '#03bb85',
    '&:hover': {
      background: '#121212',
    },
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
    textAlign: 'center',
  },
}));

export const WorkerCard: React.FC = () => {
  const classes = useStyles();
  const search = useLocation().search;
  const type = new URLSearchParams(search).get('type');
  const [workers, setWorkers] = useState<Worker[]>(null);

  const { initializeCall } = useCall();

  useEffect(() => {
    setWorkers(grabWorkerDataByCategory(type));
  }, [type]);

  const handleCall = (phoneNumber) => {
    initializeCall(phoneNumber);
  };

  return (
    <Box height="100%" width="100%" p={2}>
      {workers === null ? (
        <CircularProgress />
      ) : (
        Object.keys(workers).map((oneKey, i) => {
          return (
            <Paper key={i} variant="outlined" className={classes.paper}>
              <div style={{ margin: 10 }}>
                <Typography style={{ margin: 5 }} variant="h5">
                  {workers[oneKey].name}
                </Typography>
                <hr />
                <Typography style={{ margin: 5 }} variant="h5">
                  {workers[oneKey].company}
                </Typography>
              </div>
              <Button
                className={classes.buttonStyle}
                onClick={() => handleCall(workers[oneKey].phoneNumber)}
              >
                Make Phone Call
              </Button>
            </Paper>
          );
        })
      )}
    </Box>
  );
};
