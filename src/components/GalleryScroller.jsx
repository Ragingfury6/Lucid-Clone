import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
function GalleryScroller({images}) {
    const [imageNumber, setImageNumber] = useState(1);
    const scroller = useRef(null);
    const handleScroll = () => {
        const num = Array.from(scroller.current.children).findIndex(c=>c.getBoundingClientRect().x === 0) + 1;
        if(num !== -1) setImageNumber(num);
    }
    const handleArrowClick = (direction) => {
        if(direction === "left" && imageNumber !== 1){
            scroller.current.scrollTo({left:window.innerWidth * (imageNumber-2), behavior:"smooth"});
            setImageNumber(prev=>prev-1);
        } else if(direction === "right" && imageNumber !== images.length){
            scroller.current.scrollTo({left:window.innerWidth * imageNumber, behavior:"smooth"});
            setImageNumber(prev=>prev+1)
        }
    }
    useEffect(()=>{
        scroller.current.addEventListener("scrollend", handleScroll);
        () => scroller.current.removeEventListener("scrollend", handleScroll);
    },[]);
  return (
    <div className="gallery-scroller">
        <div className="img-container" ref={scroller}>
            {images.map(({src, alt}, idx)=> <img src={src} alt={alt} key={idx}/>)}
        </div>
        <div className="gallery-scroller-data">
            <p>{imageNumber} / 5</p>
                <button disabled={imageNumber===1}><img src="/chevronLeft.svg" alt="Chevron Left" onClick={()=>handleArrowClick('left')}/></button>            
                <button disabled={imageNumber===images.length}><img src="/chevronRight.svg" alt="Chevron Right" onClick={()=>handleArrowClick('right')}/></button>            
        </div>
    </div>
  )
}
GalleryScroller.propTypes = {
    images: PropTypes.array
}
export default GalleryScroller