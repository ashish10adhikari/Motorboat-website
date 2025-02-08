import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Package from "./Component/Package";
import WhyChooseUs from "./Component/WhyChooseUs";
import Highlight from "./Component/Highlight";
import Showcase from "./Component/Showcase";
import Footer from "./Component/Footer";
import Iframe from "./Component/Iframe";
import Testimonial from "./Component/Testimonial";
import Ourteam from "./Component/Ourteam";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Showcase />
      <Package />
      <WhyChooseUs />
      <Highlight />
      <Ourteam/>
      <Contact/>
      
      <Testimonial/>
      <Iframe/>
      <Footer/>
      
    </div>
  );
}

export default App;
