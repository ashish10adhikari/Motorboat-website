import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Package from "./Component/Package";
import WhyChooseUs from "./Component/WhyChooseUs";
import Highlight from "./Component/Highlight";
import Showcase from "./Component/Showcase";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Showcase />
      <Highlight />
      <WhyChooseUs />
      <Package />
    </div>
  );
}

export default App;
