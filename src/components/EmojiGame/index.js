/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  state = {
    selectedEmojis: [],
    gameFinishedStatus: false,
    score: 0,
    highScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  gameFinished = () => {
    const {score, highScore} = this.state
    this.setState({gameFinishedStatus: true})
    if (score > highScore) {
      this.setState(prev => ({highScore: prev.score}))
    }
  }

  emojiClicked = id => {
    const {selectedEmojis, score} = this.state
    if (selectedEmojis.includes(id) === true || score === 12) {
      this.gameFinished()
    } else {
      this.setState(prev => ({
        selectedEmojis: [...prev.selectedEmojis, id],
        score: prev.score + 1,
      }))
    }
  }

  playAgainClicked = () => {
    this.setState({selectedEmojis: [], gameFinishedStatus: false, score: 0})
  }

  highScoreSett = () => {
    this.setState({highScore: 12})
  }

  render() {
    const emojisList = this.shuffledEmojisList()
    const {gameFinishedStatus, score, highScore, selectedEmojis} = this.state

    return (
      <div className="main-container">
        <NavBar
          score={score}
          highScore={highScore}
          gameFinishedStatus={gameFinishedStatus}
        />
        <div className="bottom-part">
          {gameFinishedStatus === true || score === 12 ? (
            <WinOrLoseCard
              score={score}
              highScore={highScore}
              playAgainClicked={this.playAgainClicked}
              selectedEmojis={selectedEmojis}
              highScoreSet={this.highScoreSett}
            />
          ) : (
            <ul className="emojis-container">
              {emojisList.map(each => (
                <EmojiCard
                  details={each}
                  key={each.id}
                  emojiClicked={this.emojiClicked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
