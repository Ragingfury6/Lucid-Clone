import PropTypes from 'prop-types';
function NewsCard({src, alt, subhead, description}) {
  return (
    <div className='news-card'>
        <a href="#">
        <div className="img-wrapper">
          <img
            src={src}
            alt={alt}
            className="highlight"
          />
        </div>
        <p className='news-card__subhead'>{subhead}</p>
        <p className='news-card__description'>{description}</p>
        </a>
    </div>
  )
}
NewsCard.propTypes = {
    src:PropTypes.string,
    alt:PropTypes.string,
    subhead:PropTypes.string,
    description:PropTypes.string,
}
export default NewsCard