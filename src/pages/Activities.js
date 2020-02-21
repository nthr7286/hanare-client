import React, {
  Fragment,
} from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import relativeTime from 'dayjs/plugin/relativeTime'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import LaunchIcon from '@material-ui/icons/Launch'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
  },
}))

const Activity = ({ activity:{ date, body, to }, isNext,  ...props }) => {
  dayjs.locale('ja')
  dayjs.extend(relativeTime)
  const classes = useStyles()
  return (
    <Fragment>
      <ListItem>
        <ListItemText primary={body} secondary={
          dayjs(date).fromNow()
        } />
      { to
        ? <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="Launch"
              component="a"
              href={to}
              target="_blank"
              className={ classes.iconButton }
              children=<LaunchIcon />
            />
          </ListItemSecondaryAction>
        : null
      }
      </ListItem>
      { isNext ? <Divider /> : null }
    </Fragment>
  )
}

const activities = [
  {
    date: '2020-02-20T00:00:00.000Z',
    body: 'チーム名ブライト203として、豊田市主催のイベント「HACK the TOYOTA」に参加しました！結果はまさかの...優勝！！日経ビジネスに掲載されました。',
    to: 'https://business.nikkei.com/atcl/seminar/19/00058/021800039/',
  },
  {
    date: '2020-01-15T00:00:00.000Z',
    body: 'プロジェクト名IBTAとして、部活動感覚の定期イベント「3カ月でプロダクトを作ってみよう！」第１回目を開催しました！',
    to: '',
  },
  {
    date: '2019-12-29T00:00:00.000Z',
    body: 'アイシン・エィ・ダブリュ株式会社の有志団体「HANARE」を立ち上げました！',
    to: '',
  },
]

export default props => {
  const classes = useStyles()
  return (
    <div className={ classes.root }>
      <List>
        { activities.map( (activity, index) => {
          return (
            <Activity
              key={index}
              activity={activity}
              isNext={index !== activities.length-1}
              className={ classes.activity }
            />
          )})
        }
      </List>
    </div>
  )
}
