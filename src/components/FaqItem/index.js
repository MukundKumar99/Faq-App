import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showDetails: false}

  toggleAnswerText = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails,
    }))
  }

  render() {
    const {FaqItemList} = this.props
    const {questionText, answerText} = FaqItemList
    const {showDetails} = this.state

    return (
      <li className="faq-item">
        <div className="faq-title-container">
          <h1 className="faq-title">{questionText}</h1>
          {showDetails ? (
            <button
              type="button"
              className="show-hide-btn"
              onClick={this.toggleAnswerText}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            </button>
          ) : (
            <button
              type="button"
              className="show-hide-btn"
              onClick={this.toggleAnswerText}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            </button>
          )}
        </div>
        {showDetails ? (
          <div>
            <hr className="horizontal-ruler" />
            <p className="faq-description">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}
export default FaqItem
