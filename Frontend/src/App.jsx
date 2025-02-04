import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Package from "./Component/Package";
import WhyChooseUs from "./Component/WhyChooseUs";
import Highlight from "./Component/Highlight";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <Highlight />
      <WhyChooseUs />
      <Package />
    </div>
  );
}

export default App;
