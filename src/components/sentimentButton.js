import React from 'react';
import Button from '@material-ui/core/Button';
import {
  makeStyles
} from "@material-ui/core/styles";



const useStyles = makeStyles({
  button: {
    textTransform: "none"
  }
});



const SentimentButton = (props) => {
  const classes = useStyles();

  return (
    <>
      <Button name={props.text} onClick={props.onClick} variant='contained' className={classes.button} color='primary' style={{ margin: 8 }}>
        {props.text}
      </Button>
    </>
  );
}

export default SentimentButton;              