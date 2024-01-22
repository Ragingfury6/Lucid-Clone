import PropTypes from 'prop-types';
function Link({title}) {
  return (
    <a href="#" className="link">
        <p>{title}</p>
        {title && <img src="/rightArrow.svg" alt="Right Arrow" />}
      </a>
  )
}
Link.propTypes = {
    title: PropTypes.string
}
export default Link