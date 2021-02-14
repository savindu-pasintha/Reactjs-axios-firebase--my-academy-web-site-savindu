import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

 //loop the card
 function Loopcard(props) {

      //cards style
    const useStyles = makeStyles((theme) => ({
  root: {
            maxWidth: 345,
            
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

     
     //card
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const zoomimgin = (e) => {
       
        e.target.style.width = "500px";
        e.target.style.height = "200px";
    }
    const zoomimgout = (e) => {
       
        e.target.style.width = "345px";
        e.target.style.height = "200px";
    }

    
//end card style


    return (
            <div>
             <Card className={classes.root} style={{ border:'10px white solid', height:'520px'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.grade}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        subheader={props.subject}
      />
      <CardMedia
        className={classes.media}
        image={props.imgurl}
                        title="Paella dish"
                        onMouseEnter={zoomimgin}
                        onMouseLeave={zoomimgout}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
              <h2> <small>{ props.title}</small></h2>              
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
        { props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>   
            </div>
        );
}
export default Loopcard;
