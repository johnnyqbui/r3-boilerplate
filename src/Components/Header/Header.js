import React from "react";
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';


const styles = theme => createStyles({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
});

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.layout}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      >
        Title of Page
      </Typography>
      <Toolbar variant="dense" className={classes.toolbarSecondary}>
        <Typography color="inherit" noWrap><Link to="/">Home</Link></Typography>
        <Typography color="inherit" noWrap><Link to="/work/">Work</Link></Typography>
        <Typography color="inherit" noWrap><Link to="/about/">About</Link></Typography>
        <Typography color="inherit" noWrap><Link to="/contact/">Contact</Link></Typography>
      </Toolbar>
    </div>

  )
}


export default withStyles(styles)(Header);
