import Announcement from "./Announcement"
import NavBar from "./NavBar"

function Header() {
  return (
    <header className="header" style={{zIndex:1000}}>
    <Announcement/>
    <NavBar/>
    </header>
  )
}

export default Header