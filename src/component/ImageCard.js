import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  button : {
    display: 'inline-block',
	marginTop: '20px',
	padding: '8px 20px',
	background: '#017143',
	color: '#fff',
	borderRadius: '40px',
	fontWeight: 500,
	letterSpacing: '1px',
	textDecoration: 'none'
  },
  btnTxt: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '0.7rem',
    color: '#000',
  }
});

function ImageCard({ place, checked }) {
    const classes = useStyles();
    return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={place.imageUrl}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="h1" 
                className={classes.title}
            >
                {place.title}
            </Typography>
            <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p"
                className={classes.desc}
            >
                {place.desc}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" className={classes.button}><span className={classes.btnTxt}>Book</span></Button>
            </CardActions>
        </Card>
    </Collapse>
  );
}
  export default ImageCard;