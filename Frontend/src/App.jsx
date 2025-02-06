import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Package from "./Component/Package";
import WhyChooseUs from "./Component/WhyChooseUs";
import Highlight from "./Component/Highlight";
import Showcase from "./Component/Showcase";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Showcase />
      <Package />
      <WhyChooseUs />
      <Highlight />
      <Footer/>
      
    </div>
  );
}

export default App;
