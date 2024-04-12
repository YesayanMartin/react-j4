import "./style.css";
import Button from "../../../common/button/button";
import { IMAGES } from "../../../assets/images";

const Main = () => {
  return (
    <div className="firstContainer">
      <img src={IMAGES.firstImage} alt="firstImage" className="firstImage" />
      <div className="textContainer">
        <p>We Find Always in All Ways</p>
        <span>Our design ethos is gender-neutral and size-inclusive.</span>
      </div>
      <div className="btn">
        {<Button title="Shop Rings" />}
        {<Button title="Book Appointment" />}
      </div>
    </div>
  );
};

export default Main;
