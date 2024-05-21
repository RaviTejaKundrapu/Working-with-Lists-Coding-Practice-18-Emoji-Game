/* 
      Quick Tip 

      - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

 shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

      */

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    emojisClickedStoreList: [],
    showGameResultAndHideEmojis: 'Display Emojis List Because Game Is Live',
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  recordingEmojiId = id => {
    const {score, totalScore, emojisClickedStoreList} = this.state
    const {emojisList} = this.props

    if (emojisClickedStoreList.includes(id)) {
      console.log('Game Over')
      this.setState({
        showGameResultAndHideEmojis: 'display Score Card Only And Hide Emojis',
        totalScore: Math.max(score, totalScore),
      })
    } else {
      const newEmojisClickedStoreList = [...emojisClickedStoreList, id]

      if (newEmojisClickedStoreList.length === emojisList.length) {
        this.setState({
          emojisClickedStoreList: newEmojisClickedStoreList,
          score: newEmojisClickedStoreList.length,
          showGameResultAndHideEmojis:
            'display Score Card Only And Hide Emojis',
          totalScore: newEmojisClickedStoreList.length,
        })
      } else {
        this.setState(prevState => ({
          emojisClickedStoreList: newEmojisClickedStoreList,
          score: prevState.score + 1,
        }))
      }
    }
  }

  resetGame = () => {
    this.setState({
      emojisClickedStoreList: [],
      score: 0,
      showGameResultAndHideEmojis: 'Display Emojis List Because Game Is Live',
    })
  }

  render() {
    const {score, totalScore, showGameResultAndHideEmojis} = this.state
    const {emojisList} = this.props

    return (
      <div className="appContainer">
        <NavBar
          scoreInfo={{score, totalScore}}
          hideWhenWin={emojisList.length}
        />

        {showGameResultAndHideEmojis ===
        'Display Emojis List Because Game Is Live' ? (
          <div className="emojisContainerOuterDiv">
            <ul className="emojisContainer">
              {this.shuffledEmojisList().map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  emoji={eachItem}
                  recordingEmojiIdHandler={this.recordingEmojiId}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="resultsAnnouncement">
            <WinOrLoseCard
              resultsFromEmojiGameToWinOrLoseCard={{score, totalScore}}
              resetGameAtNormal={this.resetGame}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
