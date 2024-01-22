import { useEffect, useRef } from "react";
import { throttle } from "lodash";
function NavBar() {
  const navbar = useRef(null);
  let scrollTop = document.documentElement.scrollTop || 0;
  const onScroll = () => {
    var st = window.scrollY || document.documentElement.scrollTop;
    if (st > scrollTop) {
      navbar.current.classList.add("slide-up");
      navbar.current.classList.remove("slide-down");
    } else if (st < scrollTop) {
      navbar.current.classList.remove("slide-up");
      navbar.current.classList.add("slide-down");
    }
    scrollTop = st <= 0 ? 0 : st;
  };
  useEffect(() => {
    window.addEventListener("scroll", throttle(onScroll, 50));
    () => window.removeEventListener("scroll", throttle(onScroll, 50));
  });
  return (
    <div className="nav-wrapper" ref={navbar}>
      <nav className="navbar slide-down">
        <div className="navbar__logo">
          <img src="/logoName.svg" alt="Lucid" className="navbar__logo__name" />
          <img src="/logoIcon.svg" alt="Bear" className="navbar__logo__icon" />
        </div>
        <ul className="navbar__links">
          <li>
            <a>Air</a>
          </li>
          <li>
            <a>Gravity</a>
          </li>
          <li className="experience">
            <a>Experience</a>
          </li>
          <li className="shop">
            <a>Shop</a>
          </li>
        </ul>
        <div className="navbar__icons">
          <div className="">
            <img src="/globe.svg" alt="globe" style={{ filter: "invert(1)" }} />
          </div>
          <div className="">
            <img src="/profile.svg" alt="person" />
          </div>
        </div>
        <div className="navbar__menu">
          <p>Menu</p>
          <img
            src="/hamburger.svg"
            alt="Hamburger Menu"
            className="navbar__menu__icon"
          />
        </div>
      </nav>
      <div className="experience__slide-down">
        <div className="experience__wrapper">
          <ul className="experience__links">
            <li className="animated-link">
              <a>
                <div className="experience-link">Ownership</div>
              </a>
            </li>
            <li className="animated-link">
              <a>
                <div className="experience-link">Referral Program</div>
              </a>
            </li>
            <li className="animated-link">
              <a>
                <div className="experience-link">Sustainability</div>
              </a>
            </li>
            <li className="animated-link">
              <a>
                <div className="experience-link">Charging</div>
              </a>
            </li>
            <li className="animated-link">
              <a>
                <div className="experience-link">Careers</div>
              </a>
            </li>
          </ul>
          <div className="experience__headlines">
            <div className="experience__headline">
              <div className="experience__headline__image-wrapper">
                <img
                  src="/Experience/experience-1.jpg"
                  alt="Lucid Store Inside"
                />
              </div>
              <a className="animated-link">About Us</a>
            </div>
            <div className="experience__headline">
              <div className="experience__headline__image-wrapper">
                <img
                  src="/Experience/experience-2.jpg"
                  alt="Lucid Store Inside"
                />
              </div>
              <a className="animated-link">Events</a>
            </div>
            <div className="experience__headline">
              <div className="experience__headline__image-wrapper">
                <img
                  src="/Experience/experience-3.jpg"
                  alt="Lucid Store Inside"
                />
              </div>
              <a className="animated-link">Stories</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
