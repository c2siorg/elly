import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: 300,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ReviewCard({
  userPhoto,
  user,
  time,
  obPhoto,
  index,
  parentCallback,
}) {
  const classes = useStyles();

  const handleClickOpen = () => {
    parentCallback([true, index]);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={userPhoto}
          />
        }
        title={user}
        subheader={time}
      />
      <CardMedia className={classes.media} image={obPhoto} title={user} />
      <CardContent>
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          color="primary"
        >
          View
        </Button>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
