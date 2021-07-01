import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    seconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickResetButton = () => {
    clearInterval(this.timerId)
    this.setState({seconds: 0})
  }

  updateTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  onClickStartButton = () => {
    this.timerId = setInterval(this.updateTime, 1000)
  }

  onClickStopButton = () => {
    clearInterval(this.timerId)
  }

  renderSeconds = () => {
    const {seconds} = this.state
    const second = Math.floor(seconds % 60)
    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  renderMinutes = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const Timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                alt="stopwatch-timer"
                className="image-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <h1 testid="timer" className="stopwatch-timer">
              {Timer}
            </h1>
            <div className="button-container">
              <button
                onClick={this.onClickStartButton}
                className="btn btn-start"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onClickStopButton}
                className="btn btn-stop"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onClickResetButton}
                className="btn btn-reset"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
