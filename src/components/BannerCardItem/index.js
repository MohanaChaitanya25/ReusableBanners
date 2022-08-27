/* eslint-disable react/button-has-type */
import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={`card ${className}`}>
      <div className="card-desc">
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-para">{description}</p>
        <div>
          <button className="show-more-btn">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
