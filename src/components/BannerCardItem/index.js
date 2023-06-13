/* eslint-disable react/button-has-type */
// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCard} = props
  const {headerText, description, id} = bannerCard

  return (
    <li className={`banner-card-item card-${id}`}>
      <div>
        <h1 className="banner-card-heading">{headerText}</h1>
        <p className="banner-card-para">{description}</p>

        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
