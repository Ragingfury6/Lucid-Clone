import PropTypes from 'prop-types';
function FeatureVideo({poster, aria, src}) {
  return (
    <div className="feature">
        <video poster={poster} aria-label={aria} muted={true} autoPlay={true} loop={true} type="video/mp4">
        <source src={src} type="video/mp4"/>
        </video>
    </div>
  )
}
FeatureVideo.propTypes = {
    poster: PropTypes.string,
    aria: PropTypes.string,
    src: PropTypes.string,
}
export default FeatureVideo