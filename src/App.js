import Header from "./Components/Header/Header";
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import { BsTelegram } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import AboutUs from "./Components/AboutUs/AboutUs";
import Uslugi from "./Components/Uslugi/Uslugi";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer/Footer";

function App() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [showMesage, setShowMesage] = useState(false)

  const showMesageF = () => {
    setShowMesage(!showMesage)
  }



  return (
    <div>
      <Header />
      <div className="mesage-content" >
        <div className={`${showMesage && "showTelegram"} mesage`} >
          <a target='_blank' href="https://xn--80affa3aj0al.xn--80asehdb/#@faridun010"><i><BsTelegram /></i></a>
        </div>
        <div onClick={showMesageF} className='mesage' >
            <i><MdOutlineMarkEmailUnread /></i>
        </div>
      </div>
      <AboutUs />
      <Uslugi />
      <Footer />
    </div>
  );
}

export default App;
