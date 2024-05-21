import './index.css'

const WinOrLoseCard = props => {
  const {resultsFromEmojiGameToWinOrLoseCard, resetGameAtNormal} = props
  const {score} = resultsFromEmojiGameToWinOrLoseCard

  const resetGameToPlayAgain = () => {
    resetGameAtNormal()
  }

  const wonOrLoseText = score === 12 ? 'You Won' : 'You Lose'
  const wonOrLoseImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="WinOrLoseCardContainer">
      <img src={wonOrLoseImage} alt="win or lose" className="resultImage" />
      <div className="scoreDetailsMasterContainer">
        <h1 className="result">{wonOrLoseText}</h1>
        <div className="scoreDetailsContainer">
          <p className="scoreDesc">Best Score</p>
          <p className="scoreCard">{score}/12</p>
        </div>
        <button
          className="playAgainButton"
          type="button"
          onClick={resetGameToPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
