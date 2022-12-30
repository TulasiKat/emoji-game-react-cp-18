// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  emoji = () => {
    const {details, emojiClicked} = this.props
    const {id} = details
    emojiClicked(id)
  }

  render() {
    const {details} = this.props
    const {emojiName, emojiUrl} = details

    return (
      <li className="emoji-item">
        <button type="button" className="emoji-item-button">
          <img src={emojiUrl} alt={emojiName} onClick={this.emoji} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
