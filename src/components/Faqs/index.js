import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="faq-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-items-container">
          {faqsList.map(eachFaq => (
            <FaqItem FaqItemList={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
