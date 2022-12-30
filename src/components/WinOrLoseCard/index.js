// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainClicked, selectedEmojis, highScoreSet} = props

  const playAgain = () => {
    if (score === 12) {
      highScoreSet()
    }
    playAgainClicked()
  }

  return (
    <div className="game-finished">
      <div className="text-part">
        <h1>
          You {score === 12 || selectedEmojis.length === 12 ? 'Won' : 'Lose'}
        </h1>
        <p>Best Score</p>
        {score === 12 || selectedEmojis.length === 12 ? null : <p>Score</p>}
        <p className="score">{score}/12</p>
        <button className="play-again-button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div>
        {score === 12 || selectedEmojis.length === 12 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="win-loose"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="win-loose"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
