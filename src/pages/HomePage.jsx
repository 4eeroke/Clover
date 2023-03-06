import Slider from "../components/Slider/Slider";
import Item from "../components/Item/Item";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="container">
      <Slider />
      <div className="items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <Subscribe />
    </div>
  );
};

export default HomePage;
