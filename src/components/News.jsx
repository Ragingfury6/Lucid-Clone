import Link from "./Link"
import NewsCard from "./NewsCard"

function News() {
  return (
    <div className="news">
        <h2>News and Stories</h2>
        <Link title={"Explore All Stories"}/>
        <div className="news-cards">
            <NewsCard src={"/News/car-front-view.webp"} alt={"Lucid Car from Front"} subhead={"Dec 05, 2023 / COMPANY"} description={"Lucid Air Pure Named to Car and Driver’s 10Best List in its First Year of Eligibility, as the Newly-Configured Lucid Air Touring Debuts for Immediate Ordering"}/>
            <NewsCard src={"/News/car-under-building.webp"} alt={"Lucid Car Under Building"} subhead={"Nov 16, 2023 / COMPANY"} description={"Introducing the Lucid Gravity: Redefining the Electric SUV"}/>
            <NewsCard src={"/News/car-charging.webp"} alt={"Lucid Car Charging"} subhead={"Nov 09, 2023 / TECHNOLOGY"} description={"Introducing RangeXchange, an Innovative New Feature Enabling the Lucid Air to Directly Charge Other Electric Vehicles"}/>
        </div>
    </div>
  )
}

export default News