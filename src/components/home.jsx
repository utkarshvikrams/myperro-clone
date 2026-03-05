import Dog from "../assets/img/dog.webp";
import minidog from "../assets/img/video.webp";
import { CgShapeZigzag } from "react-icons/cg";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="in">
          <div className="line">
            <span className="smart">SMART</span>
            <span className="for">for</span>
            <span className="smart">COLLARS</span>
          </div>
          <span className="happy">HAPPIER PETS</span>

          <div className="box">
            <p className="para">
              REDEFINING THE FUTURE OF PET CARE WITH OUR NEXT-GEN{" "}
              <CgShapeZigzag className="zigzag" />
              SMART COLLARS
            </p>
            <img src={minidog} alt="mini" className="minidogs" />
          </div>
        </div>
        <div className="dog">
          <img src={Dog} alt="dog" className="dogo" />
        </div>
      </div>
      <div className="scrolling-ticker">
        <div className="ticker-content">
          <span>MYPERRO</span> <i className="star">★</i>
          <span>SMART COLLARS</span> <i className="star">★</i>
          <span>TRACK.MONITOR.PROTECT</span> <i className="star">★</i>
          <span>MYPERRO</span> <i className="star">★</i>
          <span>SMART COLLARS</span> <i className="star">★</i>
          <span>TRACK.MONITOR.PROTECT</span> <i className="star">★</i>
        </div>
      </div>
    </>
  );
};
export default Home;
