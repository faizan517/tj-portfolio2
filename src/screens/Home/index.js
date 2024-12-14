import React from "react";
import Header from '../../components/Header';
import Introduction from "../../components/Introduction";
import Satisfaction from "../../components/Customer Staisfaction";
import Companies from "../../components/Companies";
import Footer from "../../components/Footer";

function Home() {
  // const [isHide, setIsHide] = useState(true);

  // setTimeout(() => setIsHide(false), 700);
  return (
    <div className="App">
      <Header />
     <Introduction/>
     <Companies/>
     <Satisfaction/>
     <Footer/>
     {/* <Mentor/> */}
    </div>
  );
}

export default Home;
