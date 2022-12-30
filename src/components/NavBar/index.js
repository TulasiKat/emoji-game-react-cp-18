// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, highScore, gameFinishedStatus} = this.props
    return (
      <nav className="navbar">
        <div className="imagepart-nav">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {gameFinishedStatus === true || score === 12 ? null : (
          <div className="navbar-text">
            <p>Score: {score}</p>
            <p>Top Score: {highScore}</p>
          </div>
        )}
      </nav>
    )
  }
}

export default NavBar
