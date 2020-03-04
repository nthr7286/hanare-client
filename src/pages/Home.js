import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { images } from '../images/carousel'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: '0 auto',
  },
  slides: {
    padding: 0,
    margin: '0 auto',
    maxWidth: 344,
    listStyleType: 'none',
    marginBottom: 204,
    position: 'relative'
  },
  slide: {
    width: '100%',
    height: 180,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgorundSize: 'cover',
    position: 'absolute',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom : 0,
    backgroundColor: 'hsla(0, 100%, 100%, 0.25)',
    height: theme.spacing(2),
  },
}))

const useProgress = (time, current) => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let rafId = null
    let start = null
    const step = timestamp => {
      if (!start) start = timestamp
      const progress = timestamp - start
      setProgress(progress)
      if (progress < time) {
        rafId = requestAnimationFrame(step)
      }
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [current, time])

  return Math.min(progress/time, 1)
}

const useCurrent = time => {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setCurrent((current + 1)%images.length)
    }, time)
    return () => clearTimeout(timeoutId)
  }, [current, time])
  return current
}

const ProgressBar = ({ styles, ...props }) => (
  <li>
    <div
      {...props}
      style={styles}
    />
  </li>
)

const Slide = ({ styles, ...props }) => (
  <li style={styles} {...props} />
)

const Slides = props => <ul {...props} />

const Carousel = () => {
  const SLIDE_DURATION = 5000
  const classes = useStyles()
  const current = useCurrent(SLIDE_DURATION)
  const progress = useProgress(SLIDE_DURATION, current)
  return (
    <Slides className={classes.slides}>
      { images.map( (image, index) => (
        <Slide 
          key={ index }
          className={ classes.slide }
          styles={{
            backgroundImage: `url(${image})`,
            opacity: current === index ? 1 : 0
          }}
        />
      ))}
      <ProgressBar
        className={ classes.progressBar }
        styles={{ width: `${progress*100}%` }}
      />
    </Slides>
  )
}

export default props => {
  const classes = useStyles()
  return (
    <div className={ classes.root }>
      <Carousel />
      <div style={{ maxWidth: 344, margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center' }}>ホームページへようこそ！</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <p>わたしたちは、何か新しいことを始めたい/新しいスキルを身につけたい/新しいものを作りたい、けどひとりでは続かない！という人たちのために、仲間づくりができる場を提供しています。</p>
          </li>
          <li>
            <p>毎週定期開催している部活動への参加は
              <a
                href="https://itba.doorkeeper.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >こちら</a>
              から
            </p>
          </li>
          <li>
        <p>過去作品などその他の情報はメニューアイコンから好きなページを開くことができます。</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
