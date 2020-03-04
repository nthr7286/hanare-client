import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import images from '../images'
import { userData } from '../data/userData'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  card: {
    width: 344,
    margin: '0 auto',
    marginBottom: theme.spacing(1)
  },
  profiles: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    display: 'flex',
  },
  cardActions: {
  },
  metaData: {
    flex: 1
  },
  cardMedia: {
    width: 80,
    height: 80,
    borderRadius: '50%'
  }
}))

const MemberProfileCard = ({
  data: { name, jobTitle, mbtiType, img, description, actions },
  ...props
}) => {
  const classes = useStyles()
  const { noimage } = images
  return (
      <Card className={ classes.card }>
        <div className={ classes.profiles }>
          <div className={ classes.metaData }>
              <Typography
                variant="body2"
                color="textSecondary"
                gutterBottom
                children={jobTitle}
              />
              <Typography
                variant="h5"
                component="h2"
                children={name}
              />
              <Typography variant="body2"
                color="textSecondary"
                children={mbtiType}
              />
          </div>
          <CardMedia
            component="img"
            image={img ? img : noimage}
            className={ classes.cardMedia }
          />
        </div>
        <CardContent>
          <Typography
            variant="body2"
            component="p"
            children={description}
          />
        </CardContent>
        <CardActions className={ classes.cardActions }>
          { actions.map((action, index) => {
            const { name, to } = action
            return (
              <Button
                key={index}
                color="primary"
                children={name}
                component="a"
                href={to}
                target="_blank"
              />
            )
          })}
        </CardActions>
      </Card>
  )
}

export default props => {
  const classes = useStyles()
  return (
    <div className={ classes.root }>
      { userData.map((data, index) => {
        return (
          <MemberProfileCard key={index} data={data} />
        )
      })}
    </div>
  )
}
