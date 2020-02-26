import React, { Component } from 'react'
import './App.css'

import { Button } from '@material-ui/core'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url:
        'https://picsum.photos/' + window.innerWidth + '/' + window.innerHeight,
      normal: '/?random',
      gray: '/?grayscale',
      blur: '/?blur',
      grayscaleblur: '/?grayscale&blur=2',
      URL: null
    }
  }
  URL_normal () {
    this.setState({ URL: this.state.url + this.state.normal })
  }
  URL_gray () {
    this.setState({ URL: this.state.url + this.state.gray })
  }
  URL_blur () {
    this.setState({ URL: this.state.url + this.state.blur })
  }
  URL_grayscaleblur () {
    this.setState({ URL: this.state.url + this.state.grayscaleblur })
  }

  render () {
    return (
      <div className='App'>
        <div class='title'>
          <h1>Beautiful Photograph</h1>
        </div>
        <div class='Button'>
          {/* <Button onClick={() => window.location.reload()} variant="contained" color="primary"> */}
          {/* Click me */}
          {/* </Button> */}
          <Button
            onClick={() => this.URL_normal()}
            variant='contained'
            color='primary'
          >
            normal
          </Button>
          <Button
            onClick={() => this.URL_gray()}
            variant='contained'
            color='primary'
          >
            gray
          </Button>
          <Button
            onClick={() => this.URL_blur()}
            variant='contained'
            color='primary'
          >
            blur
          </Button>
          <Button
            onClick={() => this.URL_grayscaleblur()}
            variant='contained'
            color='primary'
          >
            grayblur
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant='contained'
            color='primary'
          >
            reload
          </Button>
        </div>
        <div>
          <img src={this.state.URL}></img>
        </div>
      </div>
    )
  }
}
