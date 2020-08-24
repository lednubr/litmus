import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  stepper: {
    marginTop: theme.spacing(5),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '9%',
  },
  activeLabel: {
    color: theme.palette.primary.light,
    marginTop: theme.spacing(-9),
    fontWeight: 'bold',
    fontSize: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1),
    },
  },
  normalLabel: {
    color: theme.palette.grey[600],
    fontSize: theme.spacing(1.5),
    marginTop: theme.spacing(-9),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1),
    },
  },
  nextArrow: {
    marginLeft: theme.spacing(2.5),
  },

  /* Finish modal content style */
  rootContainer: {
    marginBottom: '5rem',
  },
  mark: {
    marginTop: 80,
    textAlign: 'center',
  },
  heading: {
    fontfamily: 'Ubuntu',
    fontstyle: 'normal',
    fontweight: 'normal',
    fontSize: '40px',
    textalign: 'center',
    marginTop: '2rem',
    color: theme.palette.common.black,
  },
  headWorkflow: {
    fontfamily: 'Ubuntu',
    fontstyle: 'normal',
    fontweight: 'normal',
    fontsize: '16px',
    lineheight: '170%',
    textalign: 'center',
    color: theme.palette.common.black,
    marginTop: '2.5rem',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    marginTop: '2rem',
  },
}));

export default useStyles;