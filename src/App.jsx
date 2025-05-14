
import { Navbar } from "./Components/AdvertismentPage/Navbar"
import { Cards } from "./Components/AdvertismentPage/Cards"
import { Card1 } from "./Components/AdvertismentPage/Card1"
import Footer from "./Components/AdvertismentPage/Footer"
import { Paragraph } from "./Components/AdvertismentPage/paragraph"


function App() {
  

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">

      <div>
          <Navbar/>
          <Cards/>
          <Card1/>
          <Footer/>
          
      </div>
    </div>
  )
}

export default App
