import { useRef} from "react";
import InformationSlide from "./InformationSlide";

const information = [
    {
      img: "about-us.jpg",
      title: "Technology that drives sustainability.",
      description:
        "Our in-house developed technology, innovative design, and advanced EV motors allow customers to go farther with fewer batteries. Lighter, smaller battery packs mean Lucid vehicles use fewer precious metals and minerals.",
      link: "Learn About Lucid",
    },
    {
      img: "sustainability.jpg",
      title: "Our electric commitment.",
      description:
        "Every step of our process is a testament to green energy: responsible sourcing, zero-direct emissions, with a top energy efficiency rating that sets the tone for tomorrow.",
      link: "Explore Sustainability",
    },
    {
      img: "charging.jpg",
      title: "Changing charging - forever.",
      description:
        "Founded as a battery company, we know that efficient power, is powerful. We've worked hard to revolutionize how EVs operate - and this is only the beginning.",
      link: "Explore Charging",
    },
    {
      img: "service.jpg",
      title: "Always at your service",
      description:
        "Luxury cars deserve end-to-end support. We uphold the highest standard of care - ensuring a premium experience that lasts as long as your relationship with Lucid.",
      link: "Explore Service Centers",
    },
    {
      img: "safety.jpg",
      title: "Five-star safety",
      description:
        "Lucid's engineering boasts some of the best technical specs in the industry, achieving a number of exceptional ratings that exemplify our commitment to your protection.",
      link: "",
    },
  ]
function GeneralInformation() {
  const list = useRef(null);
  const slides = useRef(null);
  const handleClick = (e) => {
    // Underline Element
    Array.from(list.current.children).forEach((c) =>
      c.classList.remove("active")
    );
    e.target.classList.add("active");

    // Scroll Container
    const transformAmount = e.target.getAttribute("data-transform");
    slides.current.style.transform = `translateX(calc(${
      -100 * transformAmount
    }% - ${transformAmount}rem))`;

    // Scroll Scrollbar

    console.log(transformAmount);
    if(transformAmount == 0){
        list.current.children.item(0).scrollIntoView({behavior:'smooth',block:'nearest',inline:'end' });
    } else if(transformAmount == 1){
        list.current.children.item(3).scrollIntoView({behavior:'smooth',block:'nearest',inline:'end' });
    } else if(transformAmount == 2){
        list.current.children.item(4).scrollIntoView({behavior:'smooth',block:'nearest',inline:'end' });
    }
  };
  return (
    <div className="general-information">
      <h2>
        Most Advanced <span>Electric Car.</span>
      </h2>
      <p>Designed in California; Assembled in America;</p>
      <p>Engineered to Change the World.</p>
      <nav className="scroller">
        <ul ref={list}>
          <li
            data-transform={0}
            className="active"
            onClick={(e) => handleClick(e)}
          >
            About Us
          </li>
          <li data-transform={1} onClick={(e) => handleClick(e)}>
            Sustainability
          </li>
          <li data-transform={2} onClick={(e) => handleClick(e)}>
            Charging
          </li>
          <li data-transform={3} onClick={(e) => handleClick(e)}>
            Service
          </li>
          <li data-transform={4} onClick={(e) => handleClick(e)}>
            Safety
          </li>
        </ul>
      </nav>
      <div className="information-slides-wrapper">
        <div className="information-slides" ref={slides}>
          {information.map(({ img, title, description, link }, idx) => {
            return (
              <InformationSlide
                src={`/InformationSlides/${img}`}
                alt={"Car Image"}
                title={title}
                description={description}
                link={link}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
