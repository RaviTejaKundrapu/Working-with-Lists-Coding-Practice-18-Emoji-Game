import './index.css'

const EmojiCard = props => {
  const {emoji, recordingEmojiIdHandler} = props
  const {id, emojiName, emojiUrl} = emoji
  const onRecordId = () => {
    recordingEmojiIdHandler(id)
  }
  return (
    <li className="emojiCard" onClick={onRecordId}>
      <button className="button" type="button">
        <img src={emojiUrl} alt={emojiName} className="emojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
