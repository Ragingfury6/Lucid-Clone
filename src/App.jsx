import './App.css'
import ContentWrapper from './components/ContentWrapper'
import Divider from './components/Divider'
import Feature from './components/Feature'
import GalleryScroller from './components/GalleryScroller'
import GeneralInformation from './components/GeneralInformation'
import Header from './components/Header'
import InformationSlide from './components/InformationSlide'
import News from './components/News'

function App() {

  return (
    <>
    <Header/>
    <Feature logo={'/airLogo.svg'} alt={'Air'} poster={"/air-poster.webp"} aria={"Lucid Air, a luxury electric sedan, is driving through a California forest road in a winter setting."} src={"/air-feature-video.mp4"}>
    <div className="feature-grid__info__stats">
                <div className="space">
                    <p className="text--subhead">Buy From</p>
                    <p className="text--regular">$74,900</p>
                    <p className="text--small">after $7,500 Air Credit</p>
                </div>
                <div className="space">
                    <p className="text--subhead">Epa Est. Range</p>
                    <p className="text--regular">410 - 516 mi</p>
                    <p className="text--small">varies by trim</p>
                </div>
            </div>
            <div className="feature-grid__info__buttons">
                <a href='#' className="button button--highlighted">
                    <p>Explore Air</p>
                </a>
                <a href='#' className="button button--transparent">
                    <p>Order</p>
                </a>
            </div>
          
      </Feature>
    <Feature logo={'/gravityLogo.svg'} alt={'Gravity'} poster={"/gravity-poster.webp"} aria={"Lucid Gravity, a luxury electric SUV, is being shown through fog from above."} src={"/gravity-feature-video.mp4"}>
    <div className="feature-grid__info__stats">
                <div className="space">
                    <p className="text--subhead">Projected Range</p>
                    <p className="text--regular">Over 440 mi</p>
                </div>
                <div className="space">
                    <p className="text--subhead">Seating</p>
                    <p className="text--regular">Up to 7</p>
                </div>
            </div>
            <div className="feature-grid__info__buttons">
                <a href='#' className="button button--highlighted">
                    <p>Explore Gravity</p>
                </a>
                <a href='#' className="button button--transparent">
                    <p>Stay Informed</p>
                </a>
            </div>
      </Feature>
      <ContentWrapper>
        <GeneralInformation/>
      </ContentWrapper>

      <ContentWrapper>
        <div className="information-highlights">
      <InformationSlide src={"/cars-current-offers.jpg"} alt={"3 Lucid Cars Side by Side"} title={"Current Offers"} description={""} link={"Explore Current Offers"} imageStyle={"highlight"}/>
      <Divider/>
      <InformationSlide src={"/locations-lucid-store.jpg"} alt={"Lucid Store"} title={"Locations"} description={""} link={"Explore Locations"} imageStyle={"highlight"}/>
      </div>
      </ContentWrapper>
      
      <ContentWrapper fullWidth={true}>
      <Divider/>
        <GalleryScroller images={[
          {src:"/GalleryScroller/woman-by-car.avif", alt:"Woman by Car"},
          {src:"/GalleryScroller/man-by-car.avif", alt:"Man by Car"},
          {src:"/GalleryScroller/luxury-car.avif", alt:"Luxury Car"},
          {src:"/GalleryScroller/woman-in-car.avif", alt:"Woman in Car"},
          {src:"/GalleryScroller/woman-walking-car.avif", alt:"Woman Walking Next To Car"},
          ]}/>
      </ContentWrapper>

      <ContentWrapper>
        <News/>
      </ContentWrapper>
    </>
  )
}

export default App
