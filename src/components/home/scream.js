import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentSharpIcon from '@material-ui/icons/CommentSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function ScreamCard(prop) {
  const classes = useStyles();
  dayjs.extend(relativeTime);
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={prop.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={prop.author}
        subheader={'Published ' + dayjs(prop.published).fromNow()}
      />
      {/* <CardMedia className={classes.media}
        image={prop.image}
        title={prop.title}
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {prop.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="actions-item">
          <FavoriteIcon color="primary" /><span>345</span>
        </div>
        <div className="actions-item">
          <CommentSharpIcon color="primary" /><span>23</span>
        </div>
      </CardActions>
    </Card>
  );
}