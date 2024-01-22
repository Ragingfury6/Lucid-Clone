import FeatureVideo from "./FeatureVideo"
import PropTypes from 'prop-types';

function Feature({logo, alt, poster, aria, src, children}) {
  return (
    <div className="feature-container">
        <FeatureVideo poster={poster} aria={aria} src={src}/>
    <div className="feature-grid">
        <img src={logo} alt={alt} className="feature-grid__air"/>
    {/* <div className="feature-grid-wrapper"> */}

        <div className="feature-grid__info">
            {children}
        </div>
        </div>
    </div>
    // </div>
  )
}
Feature.propTypes={
    logo:PropTypes.string,
    alt:PropTypes.string,
    poster:PropTypes.string,
    aria:PropTypes.string,
    src:PropTypes.string,
    children:PropTypes.any,
}
export default Feature