import './index.css'

const NavBar = props => {
  const {scoreInfo, hideWhenWin} = props
  const {score, totalScore} = scoreInfo

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="gameName">Emoji Game</h1>
      </div>
      {hideWhenWin === score ? (
        ''
      ) : (
        <div className="scoresContainer">
          <p className="score">Score: {score}</p>
          <p className="topScore">Top Score: {totalScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
