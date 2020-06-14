import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  
  return ({
    header: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100vh',
      width: '280px',
      overflowY: 'auto',
      backgroundColor: theme.palette.primary.main
    },
    page: {
      backgroundColor: theme.palette.background[200]
    }
  })
});