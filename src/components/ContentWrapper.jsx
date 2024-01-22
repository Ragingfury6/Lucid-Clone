import PropTypes from 'prop-types';
function ContentWrapper({fullWidth=false, children}) {
  return (
    <section className={`content-wrapper ${fullWidth && 'full-width'}`}>
        {children}
    </section>
  )
}
ContentWrapper.propTypes = {
    fullWidth:PropTypes.bool,
    children: PropTypes.any
}
export default ContentWrapper