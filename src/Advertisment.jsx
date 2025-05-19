import { Navbar } from "./Components/AdvertismentPage/Navbar";
import { Cards } from "./Components/AdvertismentPage/Cards";
import { Card1 } from "./Components/AdvertismentPage/Card1";
import Footer from "./Components/AdvertismentPage/Footer";


export const Advertisment = () => {
  return (
    <div>
        <Navbar/>
        <Cards />
        <Card1 />
        <Footer />
    </div>
  )
}
