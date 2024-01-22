import PropTypes from "prop-types";
import Link from "./Link";
function InformationSlide({
  src,
  alt,
  title,
  description,
  link,
  imageStyle = "",
}) {
  return (
    <div className="information-slide">
      {imageStyle === "highlight" ? (
        <a className="img-wrapper">
          <img
            src={src}
            alt={alt}
            className={`highlight ${title=="Locations" && "locations"}`}
          />
        </a>
      ) : (
  
          <img
            src={src}
            alt={alt}
          />
      )}
<div className="">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {link && <Link title={link}/>}
      </div>
    </div>
  );
}
InformationSlide.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  imageStyle: PropTypes.string,
};
export default InformationSlide;
