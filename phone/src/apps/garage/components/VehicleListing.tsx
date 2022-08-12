import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box } from '@mui/material';
import { ListItem } from '@ui/components/ListItem';
import { Paper } from '@mui/material';
import { GarageHub, GarageVehicle } from '@typings/garage';
import CarRentalIcon from '@mui/icons-material/CarRental';
import { styled } from '@mui/material/styles';
import fetchNui from '../../../utils/fetchNui';
import { useSnackbar } from '@os/snackbar/hooks/useSnackbar';
import { MessageEvents } from '@typings/messages';
import { useHistory } from 'react-router';
import Grid from '@mui/material/Grid';
import { fetchGarageNameById, fetchVehicleNameByHash } from '../hooks/state';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '3px',
    transition: 'opacity 0.5s ease',
  },
  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    cursor: 'pointer',
    textAlign: 'center',
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
    marginBottom: 10,
    padding: 5,
  },
  '@keyframes rotate': {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  rotate: {
    transform: 'rotate(180deg)',
    transition: 'transform 150ms ease', // smooth transition
  },
  row: {
    height: '100%',
  },
  garageLocationShow: {
    animation: 'fadeIn 5s',
    opacity: 1,
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  garageLocationHidden: {
    opacity: 0,
    display: 'none',
  },
  garageLocationStored: {
    color: 'white',
    '&:hover': {
      boxShadow: '0px 8px 8px 0px green',
    },
  },
  garageLocationImpound: {
    color: 'white',
    cursor: 'default',
    '&:hover': {
      boxShadow: '0px 8px 8px 0px yellow',
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '100%',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const VehicleListing: React.FC<GarageVehicle> = ({ children, ...vehicle }) => {
  const classes = useStyles();
  const history = useHistory();
  const { addAlert } = useSnackbar();

  const [vehName, setVehName] = useState<string>('');
  const [garageData, setGarageData] = useState<GarageHub>({
    name: 'Contact Local Impound',
    location: null,
  });
  const [isRotated, setIsRotated] = useState<boolean>(false); // Hover Effect

  useEffect(() => {
    // Fetch Vehicle Model Name From Hash.
    setVehName(fetchVehicleNameByHash(vehicle.model));
    if (vehicle.stored === 1) {
      const garage = fetchGarageNameById(vehicle.garageId);
      !!garage ? setGarageData(garage) : setGarageData({ name: 'Unknown Garage', location: null });
    }
  }, [vehicle.model, vehicle.garageId, vehicle.stored]);

  const handleSetWaypoint = () => {
    // sets GPS waypoint.
    fetchNui(MessageEvents.MESSAGES_SET_WAYPOINT, {
      coords: [garageData.location.x, garageData.location.y],
    });

    // Debug to fix VEHICLE_ENUM.
    if (vehName === '🔮 IMPORT') {
      console.log(
        '=-= PLEASE COPY PASTE MODEL HASH AND DM TO Stella WITH MODEL NAME OF THE IMPORT VEHICLE YOU CLICKED <3 =-=',
      );
      console.log('=-= STEP {1} => Click on Open Log button on the bottom right of panel. =-=');
      console.log('=-= STEP {2} => Scroll to bottom & Copy MODEL HASH. =-=');
      console.log('=-= STEP {3} => DM @Stella on Discord with Hash + the vehicle name. =-=');
      console.log('=-= MODEL HASH: ' + vehicle.model + ' =-=');
    }

    // Alerts user of the GPS waypoint.
    addAlert({
      message: '📍 ' + garageData.name + ' has been marked on your GPS.',
      type: 'success',
    });

    // Brings user back to homepage.
    history.goBack();
  };

  return (
    <Box height="100%" width="100%">
      <ListItem
        className={classes.root}
        onMouseEnter={() => setIsRotated(true)}
        onMouseLeave={() => setIsRotated(false)}
      >
        <div className={classes.content}>
          <Paper variant="outlined" className={classes.paper}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid className={classes.row} container item spacing={3}>
                  <Grid item xs={2}>
                    <Item elevation={0}>
                      <CarRentalIcon
                        className={`${isRotated ? classes.rotate : ''}`}
                        fontSize="small"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={5}>
                    <Item elevation={0}>{vehName}</Item>
                  </Grid>
                  <Grid item xs={5}>
                    <Item elevation={0}>{vehicle.plate}</Item>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                className={isRotated ? classes.garageLocationShow : classes.garageLocationHidden}
              >
                <Item
                  className={
                    garageData.location
                      ? classes.garageLocationStored
                      : classes.garageLocationImpound
                  }
                  onClick={garageData.location && handleSetWaypoint}
                >
                  📍 {garageData.name}
                </Item>
              </Grid>
            </Box>
          </Paper>
        </div>
      </ListItem>
    </Box>
  );
};
