import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Package from "./Component/Package";
import WhyChooseUs from "./Component/WhyChooseUs";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Header />
      <WhyChooseUs />
      <Package />
    </div>
  );
}

export default App;
